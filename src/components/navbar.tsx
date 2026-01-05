"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import logo from "../../public/logo.svg"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      <nav className="bg-card backdrop-blur-md border border-card shadow-lg rounded-3xl p-[20px] flex items-center justify-between">
        
        {/* Logo */}
       <div className="w-[100px] h-[34px] aspect-square">
        <Image
          src={logo}
          alt="logo"
          height={34}
          ></Image>
       </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#how-it-works" className="hover:text-foreground transition-colors text-[16px] font-sans medium ">How it Works</Link>
          <Link href="#pricing" className="hover:text-foreground transition-colors text-[16px] font-sans medium">Pricing</Link>
          <Link href="#use-case" className="hover:text-foreground transition-colors text-[16px] font-sans medium">Use Case</Link>
          <Link href="#faq" className="hover:text-foreground transition-colors text-[16px] font-sans medium">FAQ</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button className="bg-[#007AFF] hover:bg-[#0066D6] text-white rounded-full px-6 text-[16px] font-sans medium">
            Contact Sales
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-black/10"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-white/90 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl mt-2 px-6 py-4"
        >
          <div className="flex flex-col items-center gap-4 text-sm font-medium text-muted-foreground">
            <Link onClick={() => setOpen(false)} href="#how-it-works" className="hover:text-foreground transition-colors text-[16px] font-sans medium ">How it Works</Link>
            <Link onClick={() => setOpen(false)} href="#pricing" className="hover:text-foreground transition-colors text-[16px] font-sans medium ">Pricing</Link>
            <Link onClick={() => setOpen(false)} href="#use-case" className="hover:text-foreground transition-colors text-[16px] font-sans medium ">Use Case</Link>
            <Link onClick={() => setOpen(false)} href="#faq" className="hover:text-foreground transition-colors text-[16px] font-sans medium ">FAQ</Link>

            <Button className="bg-[#007AFF] hover:bg-[#0066D6] text-white rounded-full px-6 text-[16px] font-sans medium">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
