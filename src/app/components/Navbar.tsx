import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <h1 className="text-xl font-bold">プロテイン金額比較サイト</h1>
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">ホーム</Link>
        <Link href="/products" className="hover:underline">商品一覧</Link>
      </div>
    </nav>
  );
}
