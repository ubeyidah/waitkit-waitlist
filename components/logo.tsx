import Image from "next/image"

export const Logo = () => (
  <Image
    src="/logo.png"
    alt="WaitKit"
    width={120}
    height={32}
    className="h-8 w-auto"
    priority
  />
)
