// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full py-4 text-center text-sm text-white text-shadow-lg">
      <p>
        Made with ❤️ by <span className="font-medium">Yash</span>
      </p>
      <p>
        Licensed under{" "}
        <a
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          MIT
        </a>
      </p>
    </footer>
  )
}
