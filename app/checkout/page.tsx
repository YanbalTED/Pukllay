'use client'

import { useState } from 'react'
import { ArrowLeft, CreditCard, Smartphone, QrCode } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'yape' | 'plin' | null>(null)
  const [showQR, setShowQR] = useState(false)

  const game = {
    title: 'Machu Picchu Quest',
    price: 9.99,
    image: '/games/machu-picchu.jpg',
  }

  const handlePayment = (method: 'yape' | 'plin') => {
    setPaymentMethod(method)
    setShowQR(true)
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/games/1"
          className="inline-flex items-center space-x-2 text-neutral-600 hover:text-primary-600 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al juego</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Resumen del Pedido</h2>
              <div className="flex items-center space-x-4 pb-6 border-b border-neutral-200">
                <div className="w-20 h-20 bg-neutral-200 rounded-xl flex items-center justify-center">
                  <span className="text-xs text-neutral-400">Imagen</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900">{game.title}</h3>
                  <p className="text-sm text-neutral-600">Desarrollador: Lima Games</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-neutral-900">S/ {game.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="pt-6 space-y-3">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span>S/ {game.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Comisión</span>
                  <span>S/ 0.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-neutral-900 pt-3 border-t border-neutral-200">
                  <span>Total</span>
                  <span>S/ {game.price.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            {!showQR && (
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Método de Pago</h2>
                <div className="space-y-4">
                  <button
                    onClick={() => handlePayment('yape')}
                    className="w-full flex items-center justify-between p-6 border-2 border-neutral-200 rounded-2xl hover:border-primary-500 hover:bg-primary-50 transition-all group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-neutral-900 group-hover:text-primary-600">
                          Yape
                        </p>
                        <p className="text-sm text-neutral-600">Pago instantáneo con QR</p>
                      </div>
                    </div>
                    <QrCode className="w-5 h-5 text-neutral-400 group-hover:text-primary-600" />
                  </button>

                  <button
                    onClick={() => handlePayment('plin')}
                    className="w-full flex items-center justify-between p-6 border-2 border-neutral-200 rounded-2xl hover:border-primary-500 hover:bg-primary-50 transition-all group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-neutral-900 group-hover:text-primary-600">
                          Plin
                        </p>
                        <p className="text-sm text-neutral-600">Pago instantáneo con QR</p>
                      </div>
                    </div>
                    <QrCode className="w-5 h-5 text-neutral-400 group-hover:text-primary-600" />
                  </button>
                </div>
              </div>
            )}

            {/* QR Code Display */}
            {showQR && paymentMethod && (
              <div className="bg-white rounded-2xl p-8 shadow-card text-center">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Escanea el código QR con {paymentMethod === 'yape' ? 'Yape' : 'Plin'}
                </h2>
                <div className="bg-white p-8 rounded-2xl border-2 border-neutral-200 inline-block mb-6">
                  <div className="w-64 h-64 bg-neutral-100 rounded-xl flex items-center justify-center">
                    <QrCode className="w-32 h-32 text-neutral-400" />
                  </div>
                </div>
                <p className="text-neutral-600 mb-6">
                  Monto a pagar: <span className="font-bold text-neutral-900">S/ {game.price.toFixed(2)}</span>
                </p>
                <p className="text-sm text-neutral-500 mb-6">
                  El pago se confirmará automáticamente en unos segundos
                </p>
                <button
                  onClick={() => setShowQR(false)}
                  className="px-6 py-3 border-2 border-neutral-200 rounded-xl hover:border-primary-500 transition-all"
                >
                  Cambiar método de pago
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="font-bold text-neutral-900 mb-4">¿Necesitas ayuda?</h3>
              <p className="text-sm text-neutral-600 mb-4">
                Si tienes problemas con el pago, contáctanos
              </p>
              <Link
                href="/contact"
                className="text-primary-600 hover:text-primary-700 text-sm font-semibold"
              >
                Contactar soporte →
              </Link>
            </div>

            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-200">
              <h3 className="font-bold text-primary-900 mb-2">Pago Seguro</h3>
              <p className="text-sm text-primary-700">
                Tus pagos están protegidos con encriptación de extremo a extremo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

