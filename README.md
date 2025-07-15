# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/4c7a8217-7bf6-4768-b14c-5650e472890f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/4c7a8217-7bf6-4768-b14c-5650e472890f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4c7a8217-7bf6-4768-b14c-5650e472890f) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## EmailJS Setup for Meeting Scheduling

To enable email confirmations, you need to:

1. **Create EmailJS Account**: Go to https://emailjs.com and create a free account
2. **Get Service ID**: Create a new email service (Gmail, Outlook, etc.)
3. **Create Email Templates**: 
   - One for client confirmation
   - One for company notification
4. **Get Public Key**: From your EmailJS dashboard
5. **Update the code**: Replace placeholder values in `src/components/ScheduleMeeting.tsx`:
   - `your_public_key_here` with your EmailJS public key
   - `service_id` with your EmailJS service ID
   - `template_client_id` with your client template ID
   - `template_company_id` with your company template ID

## Template Variables for EmailJS

### Client Template Variables:
- `{{to_email}}` - Client's email
- `{{to_name}}` - Client's name
- `{{meeting_date}}` - Meeting date
- `{{meeting_time}}` - Meeting time
- `{{company}}` - Client's company
- `{{message}}` - Client's message

### Company Template Variables:
- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email
- `{{company}}` - Client's company
- `{{meeting_date}}` - Meeting date
- `{{meeting_time}}` - Meeting time
- `{{message}}` - Client's message

Once configured, both you and your clients will receive email confirmations for every meeting booking.
