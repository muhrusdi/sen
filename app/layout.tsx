import { RootLayoutType } from "@/types"
import { Inter } from "next/font/google"
import clsx from "clsx"
import "./globals.css"
import { Providers } from "./providers"
import { headers } from "next/headers"

const inter = Inter({
  subsets: ["latin"],
})

const RootLayout: React.FC<RootLayoutType> = async ({ children }) => {
  const h = await headers()

  console.log("Headers:", h.get("host"))
  return (
    <html lang="en" className={clsx(inter.className, "font-normal")}>
      <head>
        <title>Sen.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
