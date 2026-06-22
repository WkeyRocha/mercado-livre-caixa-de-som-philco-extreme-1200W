import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  ShoppingCart,
  Menu,
  Heart,
  Share2,
  ChevronRight,
  ChevronLeft,
  Play,
  RotateCcw,
  ShieldCheck,
  Award,
  ListPlus,
  Volume2,
  Bluetooth,
  TreePine,
  BatteryCharging,
  Lightbulb,
  CreditCard,
  Star,
  SlidersHorizontal,
  Sparkles,
  ThumbsUp,
  MoreHorizontal,
  ShoppingBag,
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import mlLogo from "@/assets/ml-logo.png";
import paymentsImg from "@/assets/payments.jpg";
import img1 from "@/assets/philco-1.png";
import img2 from "@/assets/philco-2.png";
import img3 from "@/assets/philco-3.png";
import img4 from "@/assets/philco-4.jpg";
import img5 from "@/assets/philco-5.png";

const gallery = [img1, img2, img3, img4, img5];

// Altere este link para o endereço de checkout desejado
const CHECKOUT_URL = "https://go.tribopay.com.br/9psjmqsrh5";

const redirectToCheckout = () => {
  window.location.href = CHECKOUT_URL;
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caixa Som Philco Extreme 1200w Connection Tws Pcx6900 2 Mic Preto" },
      { name: "description", content: "Caixa de som Philco Extreme PCX6900 1200W com 2 microfones, Bluetooth 5.4 e bateria de até 23h." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const [currentImg, setCurrentImg] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [quantity] = useState(1);

  const notify = (msg: string) => toast.success(msg);

  return (
    <div className="min-h-screen bg-[#ededed] text-[#333]">
      <Toaster position="top-center" />
      {/* Header */}
      <header className="bg-[#FFE600]">
        <div className="flex items-center gap-3 px-3 py-3 w-full justify-between">
          <img src={mlLogo} alt="Mercado Livre" className="h-16 object-contain" />
          <div className="flex items-center gap-3">
            <button onClick={() => notify("Menu aberto")} className="relative">
              <Menu className="h-6 w-6 text-gray-800" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">1</span>
            </button>
            <button onClick={() => notify("Carrinho aberto")}>
              <ShoppingCart className="h-6 w-6 text-gray-800" />
            </button>
          </div>
        </div>
      </header>

      {/* Main product */}
      <section className="mt-3 bg-white px-4 pt-4 pb-6">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Novo | +1000 vendidos</span>
          <span className="flex items-center gap-1 text-[#3483fa]">
            4.8
            <span className="flex">
              {[0, 1, 2, 3, 4].map(i => <Star key={i} className="h-3 w-3 fill-[#3483fa] text-[#3483fa]" />)}
            </span>
            <span className="text-gray-500">(596)</span>
          </span>
        </div>
        <span className="mt-2 inline-block bg-black px-2 py-0.5 text-[10px] font-bold text-white">RECOMENDADO</span>
        <h1 className="mt-2 text-xl font-light leading-snug text-gray-900">
          Caixa Som Philco Extreme 1200w Connection Tws Pcx6900 2 Mic Preto
        </h1>

        {/* Image gallery */}
        <div className="relative mt-4">
          <span className="absolute left-0 top-0 z-10 text-xs text-gray-600">{currentImg + 1}<span className="text-gray-400">/{gallery.length}</span></span>
          <button
            onClick={() => setFavorite(f => { notify(f ? "Removido dos favoritos" : "Adicionado aos favoritos"); return !f; })}
            className="absolute right-0 top-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition-colors"
          >
            <Heart className={`h-5 w-5 ${favorite ? "fill-[#3483fa] text-[#3483fa]" : "text-[#3483fa]"}`} />
          </button>

          <div className="relative h-80">
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Philco Extreme PCX6900"
                loading="eager"
                fetchPriority={i === 0 ? "high" : "low"}
                className={`absolute inset-0 mx-auto h-80 w-full object-contain transition-opacity ${i === currentImg ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              />
            ))}
            {currentImg > 0 && (
              <button
                onClick={() => setCurrentImg(i => i - 1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
            )}
            {currentImg < gallery.length - 1 && (
              <button
                onClick={() => setCurrentImg(i => i + 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            )}
          </div>

          <button
            onClick={() => notify("Link copiado")}
            className="absolute bottom-2 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100"
          >
            <Share2 className="h-4 w-4 text-[#3483fa]" />
          </button>

          <div className="mt-2 flex items-center justify-center gap-2">
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImg(i)}
                className={`h-2 w-2 rounded-full ${i === currentImg ? "bg-[#3483fa]" : "bg-gray-300"}`}
                aria-label={`Imagem ${i + 1}`}
              />
            ))}
            <Play className="h-3 w-3 fill-gray-400 text-gray-400" />
          </div>
        </div>

        {/* Color */}
        <p className="mt-6 text-sm text-gray-800"><span className="font-semibold">Cor:</span> Preto</p>

        {/* Price */}
        <div className="mt-4">
          <p className="text-xs text-gray-400 line-through">R$ 910</p>
          <p className="text-2xl font-light text-gray-900">
            R$ 250<sup className="text-sm">00</sup>
            <span className="ml-2 text-sm text-[#00a650]">83% OFF no Pix</span>
          </p>
          <p className="mt-1 text-sm text-gray-700">
            ou R$ 250 em <span className="text-[#00a650]">10x R$ 25,00 sem juros</span>
          </p>
          <button onClick={() => notify("Meios de pagamento")} className="mt-1 text-sm text-[#3483fa]">Ver meios de pagamento e promoções</button>
        </div>

        {/* World cup banner */}
        <div className="mt-4 inline-block bg-black px-2 py-1 text-xs font-bold text-white">CHEGARÁ ANTES DA COPA ⚙</div>
        <p className="mt-3 text-sm font-semibold text-[#00a650]">Chegará grátis amanhã</p>
        <p className="text-xs text-gray-600">Comprando dentro das próximas 13 h 59 min</p>
        <button onClick={() => notify("Detalhes de entrega")} className="mt-1 block text-sm text-[#3483fa]">Mais detalhes e formas de entrega</button>

        <p className="mt-4 text-sm">
          <span className="font-semibold text-[#00a650]">Retire grátis</span>
          <span className="text-gray-800"> entre amanhã e quarta-feira em uma agência Mercado Livre</span>
        </p>
        <p className="text-xs text-gray-600">Você tem um ponto de envio a 350 m</p>
        <button onClick={() => notify("Abrindo mapa")} className="mt-1 block text-sm text-[#3483fa]">Ver no mapa</button>

        {/* Stock */}
        <h3 className="mt-6 text-sm font-semibold">Estoque disponível</h3>
        <p className="text-xs text-gray-500">
          Armazenado e enviado pelo <span className="font-bold text-[#00a650]">⚡FULL</span>
        </p>
        <button
          onClick={() => notify("Selecionar quantidade")}
          className="mt-3 flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-sm"
        >
          <span>Quantidade: <span className="font-semibold">{quantity}</span> <span className="text-gray-400">(+50 disponíveis)</span></span>
          <ChevronRight className="h-4 w-4 text-gray-500" />
        </button>

        {/* Buttons */}
        <button
          onClick={redirectToCheckout}
          className="mt-4 w-full rounded-md bg-[#3483fa] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2968c8]"
        >
          Comprar agora
        </button>
        <button
          onClick={() => notify("Adicionado ao carrinho!")}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#e3edfb] py-3 text-sm font-semibold text-[#3483fa] transition-colors hover:bg-[#d4e2f9]"
        >
          <ShoppingBag className="h-4 w-4" /> Adicionar ao carrinho
        </button>

        {/* Seller */}
        <p className="mt-5 text-sm">Vendido por <button onClick={() => notify("Loja ELETROSID")} className="text-[#3483fa]">ELETROSID</button></p>
        <p className="text-xs text-gray-600">MercadoLíder | +250 mil vendas</p>

        {/* Guarantees */}
        <div className="mt-5 space-y-3 text-sm">
          <div className="flex gap-3">
            <RotateCcw className="mt-0.5 h-4 w-4 text-gray-500" />
            <p><button onClick={() => notify("Política de devolução")} className="text-[#3483fa]">Devolução grátis.</button> Você tem 30 dias a partir da data de recebimento.</p>
          </div>
          <div className="flex gap-3">
            <ShieldCheck className="mt-0.5 h-4 w-4 text-gray-500" />
            <p><button onClick={() => notify("Compra Garantida")} className="text-[#3483fa]">Compra Garantida.</button> Receba o produto que está esperando ou devolvemos o dinheiro.</p>
          </div>
          <div className="flex gap-3">
            <Award className="mt-0.5 h-4 w-4 text-gray-500" />
            <p>12 meses de garantia de fábrica.</p>
          </div>
        </div>

        <button onClick={() => notify("Adicionado à lista")} className="mt-5 flex items-center gap-2 text-sm text-[#3483fa]">
          <ListPlus className="h-4 w-4" /> Adicionar a uma lista
        </button>
      </section>

      {/* Other purchase options */}
      <section className="mt-3 bg-white px-4 py-4">
        <div className="rounded-md border border-gray-200 p-3">
          <p className="text-sm font-semibold text-gray-800">Outras opções de compra</p>
          <button onClick={() => notify("9 opções disponíveis")} className="mt-2 text-sm text-[#3483fa]">Ver 9 opções a partir de R$ 952,54</button>
        </div>
      </section>

      {/* What you need to know */}
      <section className="mt-3 bg-white px-4 py-5">
        <h2 className="text-base font-semibold text-gray-900">O que você precisa saber sobre este produto</h2>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          {[
            "Voltagem: 127/220V.",
            "Tipo de alto-falante: 2x woofers.",
            "Bateria recarregável.",
            "Potência de 1200W.",
            "2 microfones + controle remoto",
            "Até 23 horas de bateria",
            "Função flash light (diferentes modos de iluminação)",
            "Conectividade bluetooth 5.4",
            "Altura:64 cm/ Largura:26,5 cm/ Comprimento: 30 cm",
            "Peso do produto 8,6 kg.",
          ].map((t) => (
            <li key={t} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Product characteristics */}
      <section className="mt-3 bg-white px-4 py-5">
        <h2 className="text-base font-semibold text-gray-900">Características do produto</h2>
        <ul className="mt-4 space-y-4 text-sm">
          {[
            { I: Volume2, label: "Tipos de alto-falante:", val: "2x Woofers" },
            { I: Bluetooth, label: "Com Bluetooth:", val: "Sim" },
            { I: TreePine, label: "É adequado para uso ao ar livre:", val: "Sim" },
            { I: BatteryCharging, label: "Inclui bateria recarregável:", val: "Sim" },
            { I: Lightbulb, label: "Com luzes LED:", val: "Sim" },
          ].map(({ I, label, val }) => (
            <li key={label} className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                <I className="h-4 w-4 text-gray-600" />
              </div>
              <p className="text-gray-700">{label} <span className="font-semibold text-gray-900">{val}</span></p>
            </li>
          ))}
        </ul>
      </section>

      {/* Payment methods */}
      <section className="mt-3 bg-white px-4 py-5">
        <h2 className="text-base font-semibold text-gray-900">Meios de pagamento</h2>
        <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#00a650]">
          <CreditCard className="h-4 w-4" /> Pague em até 18x sem juros!
        </p>
        <img src={paymentsImg} alt="Meios de pagamento aceitos" loading="lazy" className="mt-3 w-full rounded" />

        <button onClick={() => notify("Todos os meios de pagamento")} className="mt-4 flex w-full items-center justify-between rounded-md border border-gray-200 px-3 py-3 text-sm text-[#3483fa]">
          Ver mais meios de pagamento
          <ChevronRight className="h-4 w-4" />
        </button>
      </section>

      {/* Reviews */}
      <section className="mt-3 bg-white px-4 py-5">
        <h2 className="text-base font-semibold text-gray-900">Opiniões do produto</h2>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-4xl font-light text-[#3483fa]">4.8</span>
          <div>
            <div className="flex">
              {[0, 1, 2, 3, 4].map(i => <Star key={i} className="h-4 w-4 fill-[#3483fa] text-[#3483fa]" />)}
            </div>
            <p className="text-xs text-gray-500">596 avaliações ⓘ</p>
          </div>
        </div>


        <div className="mt-5 flex items-center justify-between">
          <h3 className="text-sm font-semibold">Opiniões</h3>
          <button onClick={() => notify("Filtros de opiniões")} className="flex items-center gap-1 rounded-full bg-[#e3edfb] px-3 py-1 text-xs text-[#3483fa]">
            <SlidersHorizontal className="h-3 w-3" /> Filtrar
          </button>
        </div>
        <p className="mt-3 text-sm text-gray-700">
          O altofalante portátil é elogiado pela excelente qualidade de som, com graves fortes e médios e agudos bem definidos. A conectividade via Bluetooth e a presença de rádio FM são destacadas como ótimas características, além dos microfones de boa qualidade.
        </p>
        <p className="mt-2 flex items-center gap-1 text-xs text-[#3483fa]">
          <Sparkles className="h-3 w-3" /> Resumo de opiniões gerado por IA
        </p>

        {[
          { text: "Ótima qualidade do som, com regularem de grave, agudo, eco; dois microfones sem fio e entrada para mais dois microfones; bateria com autonomia de 23h e, a caixa possui um tamanho discreta.", likes: 45, imgs: 2 },
          { text: "Comprem sem medooo!!!!!! maravilhoso!!!. Som perfeito!!!.", likes: 23, imgs: 3 },
          { text: "Materiais: muito bom. Design: perfeito pra levar pra qualquer lugar!. Gostei muito, volume não é tão alto, mas já faz um barulho bom! os microfones dependem de 2 pilhas aa , super leves! gostei de tudo!.", likes: 19, imgs: 4 },
          { text: "Esperava o som se mais alto. Mesmo assim eu amei tudo e pra glória de deus.", likes: 18, imgs: 4 },
          { text: "Som bom, mas não entrega os 1200w designer e stilo bom.", likes: 12, imgs: 3 },
        ].map((r, idx) => (
          <ReviewCard key={idx} review={r} />
        ))}
      </section>
    </div>
  );
}

function ReviewCard({ review }: { review: { text: string; likes: number; imgs: number } }) {
  const [liked, setLiked] = useState(false);
  const count = liked ? review.likes + 1 : review.likes;
  return (
    <article className="border-t border-gray-200 py-4">
      <div className="flex">
        {[0, 1, 2, 3, 4].map(i => <Star key={i} className="h-3 w-3 fill-[#3483fa] text-[#3483fa]" />)}
      </div>
      <p className="mt-2 text-sm text-gray-800">{review.text}</p>
      <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
        <span>Brasil | Há 2 meses</span>
        <div className="flex items-center gap-3">
          <button onClick={() => setLiked(l => !l)} className={`flex items-center gap-1 ${liked ? "text-[#3483fa]" : ""}`}>
            <ThumbsUp className={`h-3 w-3 ${liked ? "fill-[#3483fa]" : ""}`} /> Útil ({count})
          </button>
          <button><MoreHorizontal className="h-4 w-4" /></button>
        </div>
      </div>
    </article>
  );
}
