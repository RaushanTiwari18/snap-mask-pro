import { useCallback, useEffect, useRef, useState } from "react";
import { removeBackground } from "@/services/backgroundRemoval";
import { validateImageFile } from "@/lib/fileValidation";
import type { BackgroundRemovalResult, ProcessingState } from "@/types/backgroundRemoval";

export function useBackgroundRemoval() {
  const [state, setState] = useState<ProcessingState>("idle");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<BackgroundRemovalResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  const revoke = useCallback(() => {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
  }, []);

  useEffect(() => revoke, [revoke]);

  const selectFile = useCallback(
    (nextFile: File | undefined) => {
      const validationError = validateImageFile(nextFile);
      if (validationError || !nextFile) {
        setError(validationError);
        setState("error");
        return;
      }
      revoke();
      const url = URL.createObjectURL(nextFile);
      objectUrlRef.current = url;
      setFile(nextFile);
      setPreviewUrl(url);
      setResult(null);
      setError(null);
      setState("selected");
    },
    [revoke],
  );

  const process = useCallback(async () => {
    if (!file) {
      setError("Please select an image to continue.");
      setState("error");
      return;
    }
    setState("processing");
    setError(null);
    try {
      const output = await removeBackground(file);
      setResult(output);
      setState("success");
    } catch (thrown) {
      const message =
        thrown && typeof thrown === "object" && "message" in thrown
          ? String((thrown as { message: string }).message)
          : "Unable to remove the background. Please try again.";
      setError(message);
      setState("error");
    }
  }, [file]);

  const reset = useCallback(() => {
    revoke();
    setFile(null);
    setPreviewUrl(null);
    setResult(null);
    setError(null);
    setState("idle");
  }, [revoke]);

  const clearError = useCallback(() => {
    setError(null);
    setState(file ? "selected" : "idle");
  }, [file]);

  return { state, file, previewUrl, result, error, selectFile, process, reset, clearError };
}
