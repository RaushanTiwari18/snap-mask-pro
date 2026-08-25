# SnapCut AI

You are a senior frontend engineer, UI/UX designer, and SaaS product designer.

Create a modern, responsive, production-quality AI-powered web application called:

SNAPCUT AI

Tagline:
Remove Image Background in One Click.

==================================================
PROJECT OVERVIEW
==================================================

SnapCut AI is a simple AI-powered web application that allows users to remove the background from any image in one click.

The product has one primary purpose and USP:

Upload an image → Remove the background automatically using AI → Preview the result → Download the transparent image.

Do not turn this into a full photo editor. The product should remain focused on background removal as its primary feature.

The target users include:

- E-commerce sellers
- Social media creators
- Graphic designers
- Students
- Small business owners
- Marketers
- Anyone who needs a transparent-background image quickly

The experience should feel simple, fast, premium, and trustworthy.

==================================================
IMPORTANT ARCHITECTURE CONSTRAINT
==================================================

There is NO traditional backend application.

Do not create:

- Node.js backend servers
- Express servers
- Custom API servers
- Databases
- Authentication systems

All image-processing backend logic will be handled through an n8n workflow using a webhook.

Architecture:

User
→ SnapCut AI Frontend
→ n8n Webhook
→ Background Removal API
→ n8n Workflow
→ Processed Image Response
→ SnapCut AI Frontend
→ User Downloads Image

The frontend should be designed so that the webhook URL can easily be configured using an environment variable.

Example:

VITE_N8N_WEBHOOK_URL=YOUR_WEBHOOK_URL

or, if using Next.js:

NEXT_PUBLIC_N8N_WEBHOOK_URL=YOUR_WEBHOOK_URL

Do not hardcode a real webhook URL.

==================================================
PRIMARY USER FLOW
==================================================

The main user flow should be extremely simple:

1. User lands on the homepage.
2. User immediately understands that SnapCut AI removes image backgrounds.
3. User clicks "Upload Image" or "Remove Background".
4. User selects an image through:
   - File picker
   - Drag and drop
5. Validate the uploaded file.
6. Show a preview of the original image.
7. User clicks "Remove Background".
8. Show a processing state.
9. Send the image to the n8n webhook.
10. Receive the processed image.
11. Display the result.
12. Allow the user to download the image as a transparent PNG.
13. Allow the user to upload and process another image.

The main experience should require minimal steps and no technical knowledge.

==================================================
IMAGE UPLOAD REQUIREMENTS
==================================================

Create a professional image upload component.

Support:

- JPG
- JPEG
- PNG
- WEBP

The upload area should support:

- Drag and drop
- Click to browse files
- Mobile-friendly file selection

Show:

- Upload icon
- Clear instructions
- Supported file formats
- Maximum file size placeholder/configuration
- Selected file preview
- File name

Validate:

- Unsupported file types
- File size limits
- Empty uploads

Display clear and friendly error messages.

Example:

"Please upload a JPG, PNG, JPEG, or WEBP image."

==================================================
WEBHOOK INTEGRATION
==================================================

Create a reusable API service for communicating with the n8n webhook.

The frontend should:

1. Accept the uploaded image.
2. Prepare the image for upload.
3. Use FormData by default for image transmission.
4. Send a POST request to the configurable n8n webhook URL.
5. Handle loading, success, and error responses.

Example request structure:

POST WEBHOOK_URL

FormData:

image: uploaded file

Optional metadata:

fileName
fileType

Design the integration so it is easy to modify if the n8n workflow later requires Base64 instead of FormData.

Create a separate configuration or service file for the webhook integration.

==================================================
EXPECTED WEBHOOK RESPONSE
==================================================

Assume that n8n may return a response such as:

{
  "success": true,
  "imageUrl": "https://example.com/processed-image.png"
}

The frontend should also be flexible enough to support:

{
  "success": true,
  "imageBase64": "data:image/png;base64,..."
}

Create a response parser that supports both:

- imageUrl
- imageBase64

If the API returns an error, display a useful error message.

Example:

{
  "success": false,
  "message": "Unable to remove the background. Please try again."
}

==================================================
LOADING EXPERIENCE
==================================================

While the image is being processed, show a polished loading experience.

Display:

- Animated processing indicator
- "Removing background..."
- Supporting text such as:
  "Our AI is processing your image. This may take a few seconds."

Do not show a fake progress percentage unless real progress information is available.

The loading experience should feel premium and smooth.

==================================================
RESULT EXPERIENCE
==================================================

After successful processing, show a professional result section.

Include:

- Original image
- Processed image
- Transparent checkerboard background behind the processed image
- Clear visual comparison

On desktop:

Use a side-by-side layout.

Left:
Original Image

Right:
Background Removed

On mobile:

Stack the images vertically.

Include the following actions:

- Download PNG
- Try Another Image

The "Download PNG" button should trigger a proper image download.

Use a meaningful filename, for example:

original-filename-snapcut.png

==================================================
DUMMY RESPONSE FALLBACK
==================================================

During development, include a clearly isolated development fallback.

If:

- The webhook URL is not configured, OR
- Development/demo mode is enabled

Allow the UI to use a mock successful response.

The mock response should be easy to remove or disable for production.

Do not pretend that the fallback is real AI processing.

Structure this logic cleanly.

==================================================
PAGES
==================================================

Create the following pages:

1. Home
2. Remove Background
3. About
4. FAQ
5. Privacy Policy
6. Terms of Service

Do not add unnecessary pages.

No login.
No signup.
No user dashboard.
No user profile.
No database-driven history.

==================================================
HOME PAGE
==================================================

Create a modern SaaS landing page.

Navigation:

Left:
Wide horizontal SnapCut AI logo.

The logo layout should be:

[Visual Symbol]  SnapCut AI

The visual symbol should be placed on the left and the "SnapCut AI" text should appear on the right.

Use the SnapCut AI logo asset if available in the project assets.

Navigation links:

- Home
- How It Works
- FAQ
- About

Right-side CTA:

"Remove Background"

Hero Section:

Main headline:

"Remove Image Background in One Click"

Supporting text:

"Upload your image and let AI remove the background automatically in seconds. No design skills. No complicated tools."

Primary CTA:

"Upload Image"

Secondary supporting text:

"Fast, simple, and easy to use."

The hero should prominently feature the upload experience so users can start immediately.

Do not force users to navigate through multiple screens before uploading an image.

==================================================
HOW IT WORKS SECTION
==================================================

Create a simple 3-step section.

Step 1:
Upload Your Image

"Choose an image from your device or drag and drop it into the upload area."

Step 2:
AI Removes the Background

"Our AI automatically detects the main subject and removes the background."

Step 3:
Download Your Image

"Preview the result and download your transparent PNG image."

Use simple modern icons or illustrations.

==================================================
BENEFITS SECTION
==================================================

Include concise benefit cards.

Examples:

Fast Processing
Remove backgrounds in just a few seconds.

No Design Skills Required
Upload your image and let AI handle the work.

Clean Results
Get a transparent image ready for your next project.

Easy to Use
No complicated editing tools or manual selection.

Do not make unsupported technical claims such as "100% accurate" or "perfect results."

==================================================
USE CASES SECTION
==================================================

Include a simple section explaining who can use SnapCut AI.

Examples:

- E-commerce Product Images
- Social Media Content
- Marketing Materials
- Presentations
- Personal Projects

Use a visually clean card or grid layout.

==================================================
FAQ SECTION
==================================================

Create an accordion-style FAQ.

Include questions such as:

What is SnapCut AI?

How does background removal work?

Which image formats are supported?

How long does it take to remove a background?

Can I download the processed image?

Do I need design experience?

Are my images stored permanently?

Keep the answers concise and user-friendly.

==================================================
REMOVE BACKGROUND PAGE
==================================================

This is the main application page.

Page heading:

"Remove Background"

Supporting text:

"Upload an image and remove its background in seconds."

The page should handle these states:

1. Empty State
2. File Selected
3. Processing State
4. Success State
5. Error State

EMPTY STATE:

Show the drag-and-drop upload area.

FILE SELECTED STATE:

Show:

- Image preview
- File name
- Remove Background button
- Option to replace or remove the selected image

PROCESSING STATE:

Show:

- Loading animation
- "Removing background..."
- Disabled controls to prevent duplicate submissions

SUCCESS STATE:

Show:

- Original image
- Processed image
- Download PNG button
- Try Another Image button

ERROR STATE:

Show:

- Clear error icon/message
- Explanation if available
- "Try Again" button

==================================================
ABOUT PAGE
==================================================

Explain the product simply.

Suggested content:

"SnapCut AI was created to make background removal simple and accessible. Instead of using complicated photo editing software or manually selecting subjects, users can upload an image and let AI handle the background removal process."

Keep the page focused on simplicity, accessibility, and the product mission.

==================================================
PRIVACY POLICY
==================================================

Create a professional placeholder privacy policy suitable for this product.

Clearly state that:

- Images are sent for processing.
- Images are processed through integrated services.
- Images should not be stored permanently by the frontend application.
- Actual data retention depends on the configured processing workflow and third-party services.

Do not make false legal guarantees.

Clearly mark the legal content as requiring review before production launch.

==================================================
TERMS OF SERVICE
==================================================

Create a professional placeholder Terms of Service page.

Include sections for:

- Acceptance of terms
- Use of the service
- User-uploaded content
- Service availability
- Limitation of liability
- Changes to the service

Clearly indicate that the content should be reviewed legally before production use.

==================================================
DESIGN DIRECTION
==================================================

The visual identity should feel like:

- Modern AI SaaS
- Professional
- Minimal
- Premium
- Fast
- Approachable

Avoid:

- Overly playful design
- Excessive gradients
- Too many floating elements
- Overly complicated dashboards
- Generic template appearance

Use generous whitespace.

Create strong visual hierarchy.

The upload tool should always remain the main visual focus.

==================================================
COLOR SYSTEM
==================================================

Use a refined blue and purple gradient identity.

Primary gradient direction:

Blue → Indigo → Purple

Suggested visual usage:

- CTA buttons
- Logo accents
- Icons
- Small highlights
- Focus states

Do not apply gradients to every element.

Use a clean neutral background.

Recommended direction:

Light Mode:
- White and very light neutral backgrounds
- Dark navy/charcoal text
- Blue-to-purple gradient accents

Support dark mode only if it can be implemented cleanly without adding unnecessary complexity.

==================================================
TYPOGRAPHY
==================================================

Use a modern sans-serif font.

Recommended style:

- Bold, confident hero headings
- Clear medium-weight section headings
- Comfortable body text
- High readability on mobile and desktop

Avoid overly decorative fonts.

==================================================
UI COMPONENTS
==================================================

Create reusable components where appropriate.

Suggested components:

- Navbar
- Logo
- HeroSection
- ImageUploader
- FilePreview
- ProcessingState
- ResultComparison
- DownloadButton
- CTAButton
- FeatureCard
- HowItWorksCard
- FAQAccordion
- Footer
- ErrorState

Keep components modular and maintainable.

==================================================
RESPONSIVE DESIGN
==================================================

The application must be fully responsive.

Prioritize:

Mobile:
- Easy image upload
- Large touch targets
- Clear vertical layout
- No horizontal scrolling

Tablet:
- Balanced spacing
- Adaptive layouts

Desktop:
- Side-by-side image comparison
- Strong visual hierarchy
- Comfortable content width

Use mobile-first responsive design.

==================================================
ACCESSIBILITY
==================================================

Include:

- Semantic HTML
- Accessible buttons
- Keyboard-accessible controls
- Visible focus states
- Proper labels for file inputs
- Meaningful alt text
- Good color contrast
- Accessible error messages

==================================================
TECH STACK
==================================================

Build using:

- React
- TypeScript
- Vite or the default framework recommended by Lovable
- Tailwind CSS
- Lucide icons or an equivalent lightweight icon library

Use:

- Fetch API for webhook communication unless another lightweight option is already configured.
- Environment variables for configuration.

Do not introduce unnecessary dependencies.

==================================================
CODE ORGANIZATION
==================================================

Use a clean structure similar to:

src/
  components/
  pages/
  services/
  hooks/
  lib/
  types/
  assets/

Create:

services/backgroundRemoval.ts

This service should handle:

- Webhook URL configuration
- FormData creation
- POST request
- Response parsing
- Error handling
- Optional development fallback

Create TypeScript types for:

- BackgroundRemovalResponse
- BackgroundRemovalError
- ProcessingState

Keep business logic separate from UI components.

==================================================
ERROR HANDLING
==================================================

Handle:

- Missing file
- Invalid file type
- File too large
- Missing webhook configuration
- Network failure
- Timeout where appropriate
- Invalid API response
- Processing failure

Error messages should be user-friendly.

Avoid exposing raw technical errors directly to users.

Log technical errors safely for development.

==================================================
PERFORMANCE
==================================================

Optimize for:

- Fast initial page load
- Minimal dependencies
- Efficient image previews
- Proper cleanup of object URLs
- Avoiding unnecessary re-renders

Do not permanently store uploaded images in the browser unless required for the current session.

==================================================
ANIMATIONS
==================================================

Use subtle and purposeful animations.

Examples:

- Upload area hover state
- Button hover state
- Processing animation
- Result appearance transition
- FAQ accordion transition

Animations should enhance usability, not distract from the core product.

==================================================
FOOTER
==================================================

Include:

SnapCut AI logo

Short description:

"Remove image backgrounds quickly and easily with AI."

Links:

- Home
- Remove Background
- About
- FAQ
- Privacy Policy
- Terms of Service

Optional copyright:

© 2026 SnapCut AI. All rights reserved.

==================================================
DO NOT BUILD
==================================================

Do not build:

- Authentication
- User accounts
- Login/signup
- Database
- Admin dashboard
- Traditional backend server
- Manual photo editor
- Crop tools
- Background replacement tools
- AI image generation
- Batch processing in the initial version
- Payment integration
- Credit system
- Advertising
- Social media feed
- Unnecessary dashboards

The first version should focus on doing one thing extremely well:

REMOVE IMAGE BACKGROUNDS IN ONE CLICK.

==================================================
FINAL OUTPUT REQUIREMENTS
==================================================

Generate the complete working frontend application.

Include:

1. All required pages
2. Responsive UI
3. Reusable components
4. Image upload functionality
5. Drag-and-drop support
6. File validation
7. Original image preview
8. n8n webhook integration
9. Loading states
10. Success states
11. Error states
12. Result comparison UI
13. PNG download functionality
14. Configurable environment variable
15. Dummy/development fallback
16. Clean TypeScript types
17. Production-quality code organization

The application should work correctly with a real n8n webhook after the environment variable and expected response format are configured.

Prioritize functionality first, then polish the UI.

Do not generate a fake static-only interface.

The upload → process → result → download flow must be implemented as a functional frontend workflow.

Start by generating the complete SnapCut AI application.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b7be79b9-027f-4906-a232-332e53564e54).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
