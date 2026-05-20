import Nav from "@/components/Nav"
import KingsHero from "@/components/KingsHero"
import TrustStrip from "@/components/TrustStrip"
import ServicesPreview from "@/components/ServicesPreview"
import Reviews from "@/components/Reviews"
import BookingCTA from "@/components/BookingCTA"
import Location from "@/components/Location"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <KingsHero />
        <TrustStrip />
        <ServicesPreview />
        <Reviews />
        <BookingCTA />
        <Location />
      </main>
      <Footer />
    </>
  )
}
