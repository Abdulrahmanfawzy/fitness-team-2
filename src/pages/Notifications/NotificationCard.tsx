type Props = {
  title: string
  desc: string
  time: string
  icon: any
  active?: boolean
}

export default function NotificationCard({
  title,
  desc,
  time,
  icon: Icon,
  active,
}: Props) {
  return (
    <div
      className={`rounded-xl p-4 flex justify-between border 
      ${active ? "border-red-500" : "border-[#A7A7A7]"}`}
    >
      <div className="flex gap-3">
        <Icon size={16} strokeWidth={0.9} className="w-6 h-6 mt-1" />

        <div>
          <h3 className=" flex items-center gap-2 ">
            {title}
            {active && <span className="w-1 h-1 bg-red-500 rounded-full" />}
          </h3>

          <p className="text-sm text-[#FFFFFF] font-extralight">{desc}</p>
        </div>
      </div>

      <span className="text-xs font-extralight">{time}</span>
    </div>
  )
}