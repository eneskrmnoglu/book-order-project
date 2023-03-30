import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "Nasıl üye olabilirim?",
    answer:
      "Ana sayfada sağ üstte bulunan “Giriş Yap veya Üye ol” linkine tıklayarak kolayca üye olabilirsin. Dilersen Facebook hesabınla da giriş yapabilirsin.",
  },
  {
    question: "Siparişimin durumu hakkında nasıl bilgi alabilirim?",
    answer:
      "Siparişlerinin durumunu “Hesabım” menüsündeki “Siparişlerim” sayfasından öğrenebilirsin.",
  },
  {
    question: "Yurtdışından sipariş verebilir miyim?",
    answer: "Siparişleri sadece yurtiçi adreslere gönderebiliyoruz.",
  },
  {
    question: "Faturanın şirket adına kesilmesini istiyorum. Ne yapmalıyım?",
    answer:
      "Siparişini oluştururken “Adreslerim” bölümünde “Fatura Adresi” eklerken fatura tipini “Sirket” olarak seçip gerekli bilgileri girerek faturanın bir şirket adına kesilmesini sağlayabilirsin.",
  },
  {
    question:
      "Sipariş ettiğim ürünler ile faturanın farklı adrese gelmesini istiyorum. Mümkün mü?",
    answer:
      "Evet. Siparişini oluştururken “Adreslerim” bölümünde “Teslimat Adresi” ve “Fatura Adresi”ni farklı seçebilirsin. Böylece ürünler ve faturanız farklı adreslere gönderilir.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SSS() {
  return (
    <div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sıkça Sorulan Sorular
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SSS;
