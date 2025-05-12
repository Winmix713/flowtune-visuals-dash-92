import { StrategyCard } from "@/components/ui/strategy-card";

export function StrategicPlan() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StrategyCard
        number={1}
        icon="warning"
        name="Victoria P."
        role="Design Lead"
        quote="Feedback showed confusion. We built dashboards for seamless navigation and task tracking."
        avatar="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      />
      <StrategyCard
        number={2}
        icon="info"
        name="Stan D."
        role="CTO"
        quote="Disconnected systems slowed teams. We integrated tools to streamline daily operations efficiently."
        avatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
      />
      <StrategyCard
        number={3}
        icon="success"
        name="Mari S."
        role="COO & CX Designer"
        quote="User insights revealed pain points. Our strategy focuses on automation, clarity, and process optimization."
        avatar="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      />
    </div>
  );
}
