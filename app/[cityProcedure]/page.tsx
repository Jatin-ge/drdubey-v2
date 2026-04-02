import { CITY_PAGES } from '@/lib/city-pages'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  return CITY_PAGES.map(p => ({
    cityProcedure: p.slug
  }))
}

export async function generateMetadata(
  { params }: { params: { cityProcedure: string } }
) {
  const page = CITY_PAGES.find(p => p.slug === params.cityProcedure)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `https://www.drdubay.in/${page.slug}`
    }
  }
}

export default function CityPage(
  { params }: { params: { cityProcedure: string } }
) {
  const page = CITY_PAGES.find(p => p.slug === params.cityProcedure)
  if (!page) return notFound()

  return (
    <main style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 24px',
    }}>
      <div style={{
        display: 'inline-block',
        backgroundColor: '#eff6ff',
        color: '#1d4ed8',
        fontSize: '13px',
        fontWeight: '500',
        padding: '4px 12px',
        borderRadius: '99px',
        marginBottom: '16px',
      }}>
        {page.procedure} · {page.city}
      </div>

      <h1 style={{
        fontSize: '32px',
        fontWeight: '700',
        color: '#0f172a',
        lineHeight: 1.3,
        marginBottom: '20px',
      }}>
        {page.h1}
      </h1>

      <p style={{
        fontSize: '16px',
        color: '#475569',
        lineHeight: 1.8,
        marginBottom: '32px',
      }}>
        {page.intro}
      </p>

      <div style={{
        backgroundColor: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '12px',
        padding: '20px 24px',
        marginBottom: '32px',
      }}>
        <p style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#15803d',
          marginBottom: '6px',
        }}>
          📍 {page.distance}
        </p>
        <p style={{ fontSize: '14px', color: '#166534' }}>
          {page.campNote}
        </p>
      </div>

      <div style={{
        backgroundColor: '#eff6ff',
        border: '1px solid #bfdbfe',
        borderRadius: '12px',
        padding: '20px 24px',
        marginBottom: '32px',
      }}>
        <p style={{ fontSize: '14px', color: '#1e40af' }}>
          ✅ {page.patientNote}
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        marginBottom: '40px',
      }}>
        {[
          { icon: '🏆', label: 'Forbes World Record', sub: 'Most surgeries in a day' },
          { icon: '⚕️', label: '24,000+ Surgeries', sub: 'Successful joint replacements' },
          { icon: '⚡', label: 'Zero Technique', sub: 'Walking within 24 hours' },
          { icon: '🎖️', label: 'Health Minister Award', sub: '3 consecutive years' },
        ].map(item => (
          <div key={item.label} style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '16px',
          }}>
            <span style={{ fontSize: '24px' }}>{item.icon}</span>
            <p style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1e293b',
              marginTop: '8px',
            }}>
              {item.label}
            </p>
            <p style={{ fontSize: '12px', color: '#64748b' }}>{item.sub}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Link href="/booking/jaipur" style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '14px 28px',
          borderRadius: '10px',
          textDecoration: 'none',
          fontSize: '15px',
          fontWeight: '600',
        }}>
          Book Appointment
        </Link>
        <a href="tel:+918955373205" style={{
          backgroundColor: '#25D366',
          color: 'white',
          padding: '14px 28px',
          borderRadius: '10px',
          textDecoration: 'none',
          fontSize: '15px',
          fontWeight: '600',
        }}>
          Call Now
        </a>
      </div>
    </main>
  )
}
