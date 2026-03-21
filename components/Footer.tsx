export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto text-center text-sm text-neutral-400">
        &copy; {new Date().getFullYear()} 김유나. All rights reserved.
      </div>
    </footer>
  );
}
