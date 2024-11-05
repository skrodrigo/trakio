import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export default function AboutSection() {
	return (
		<div>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6 max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
						Perguntas Frequentes
					</h2>
					<Accordion type="single" collapsible className="space-y-4">
						<AccordionItem value="item-1">
							<AccordionTrigger>O que é a Trakio?</AccordionTrigger>
							<AccordionContent>
								A Trakio é uma plataforma de monitoramento de métricas que
								oferece ferramentas de visualização de dados para empresas de
								todos os tamanhos. Com a Trakio, você pode acompanhar métricas
								personalizadas em gráficos dinâmicos e interativos.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>
								Como posso integrar meus dados com a Trakio?
							</AccordionTrigger>
							<AccordionContent>
								Você pode integrar seus dados via webhooks, o que permite a
								atualização automática de métricas sem necessidade de inserção
								manual. Basta configurar os webhooks para que os dados sejam
								enviados diretamente para a plataforma.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>
								Existe um limite de métricas na versão gratuita?
							</AccordionTrigger>
							<AccordionContent>
								Sim, a versão gratuita da Trakio permite monitorar até 15
								métricas. Para monitorar um número maior de métricas, você pode
								fazer o upgrade para o plano premium.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger>
								Quais tipos de gráficos estão disponíveis?
							</AccordionTrigger>
							<AccordionContent>
								A Trakio utiliza o Recharts para oferecer uma variedade de
								gráficos, como gráficos de linha, barra, pizza e área,
								proporcionando visualizações de dados flexíveis e intuitivas
								para atender diferentes necessidades de análise.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-5">
							<AccordionTrigger>
								Como funciona o pagamento e os planos de assinatura?
							</AccordionTrigger>
							<AccordionContent>
								A Trakio utiliza o Stripe para gerenciar pagamentos. Você pode
								iniciar com a versão gratuita e, caso necessite de mais
								funcionalidades, optar pelo plano premium, que desbloqueia
								métricas adicionais e mais recursos.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</section>
		</div>
	);
}
