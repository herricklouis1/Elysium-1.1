import StockCard from '../components/StockCard'

export default function Home() {
  return (
    <div>
      <section className="rounded-lg bg-gradient-to-r from-fidelity to-blue-500 text-white p-10 mb-8">
        <h1 className="text-3xl font-bold">Elysium Finance</h1>
        <p className="mt-2 max-w-2xl">A clean, professional financial portal prototype inspired by leading brokerages.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <h2 className="text-xl font-semibold mb-4">Market Snapshot</h2>
          <div className="flex gap-4">
            <StockCard symbol="AAPL" name="Apple Inc." price="$178.34" change="+1.12%" />
            <StockCard symbol="GOOG" name="Alphabet" price="$130.22" change="-0.45%" />
            <StockCard symbol="AMZN" name="Amazon" price="$99.88" change="+0.32%" />
          </div>
        </div>

        <aside className="bg-white shadow rounded-lg p-4 h-full">
          <h3 className="font-semibold">Account Summary</h3>
          <div className="mt-4">
            <div className="text-sm text-slate-500">Total balance</div>
            <div className="text-2xl font-bold">$124,382.50</div>
            <div className="mt-2 text-sm text-green-600">+0.8% today</div>
          </div>
        </aside>
      </section>
    </div>
  )
}
