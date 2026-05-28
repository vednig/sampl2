export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f7f5]">
      <div className="flex flex-col items-center gap-4">
        <span
          className="block w-8 h-px bg-stone-900 animate-[lineGrow_1s_cubic-bezier(0.16,1,0.3,1)_infinite_alternate]"
        />
        <span className="font-display text-sm tracking-wide2 text-stone-400 uppercase">
          Loading
        </span>
      </div>
    </div>
  )
}
