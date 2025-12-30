type StockProps = {
  symbol: string,
  name: string,
  price: string,
  change: string
}

export default function StockCard({ symbol, name, price, change }: StockProps) {
  const up = change.startsWith('+')
  return (
    <div className="bg-white rounded-lg shadow p-4 w-48">
      <div className="text-sm text-slate-500">{name}</div>
      <div className="flex items-baseline justify-between mt-2">
        <div>
          <div className="text-lg font-semibold">{symbol}</div>
          <div className="text-sm text-slate-500">{price}</div>
        </div>
        <div className={`text-sm font-medium ${up ? 'text-green-600' : 'text-red-600'}`}>{change}</div>
      </div>
    </div>
  )
}
