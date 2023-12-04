import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-x-4">
        <a
          href="/client-wrap-error"
          className="text-lg rounded-lg bg-red-200 p-4"
        >
          Client Error
        </a>
        <a
          href="/server-wrap-win"
          className="text-lg rounded-lg bg-red-200 p-4"
        >
          Server win
        </a>

        <a
          href="/client-wrap-win"
          className="text-lg rounded-lg bg-red-200 p-4"
        >
          Client win
        </a>
      </div>
    </main>
  );
}
