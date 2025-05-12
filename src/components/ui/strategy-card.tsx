import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AlertTriangle, CircleCheck, Info } from "lucide-react";

interface StrategyCardProps {
  number: number;
  icon: "info" | "warning" | "success";
  name: string;
  role: string;
  quote: string;
  className?: string;
  avatar: string;
}

const ICONS = {
  info: <Info className="h-5 w-5 text-blue-500" />,
  warning: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
  success: <CircleCheck className="h-5 w-5 text-green-500" />,
};

const GRADIENTS = {
  info: "from-blue-500/20 to-transparent",
  warning: "from-yellow-500/20 to-transparent",
  success: "from-green-500/20 to-transparent",
};

const BORDERS = {
  info: "border-blue-500/20",
  warning: "border-yellow-500/20",
  success: "border-green-500/20",
};

export function StrategyCard({
  number,
  icon,
  name,
  role,
  quote,
  className,
  avatar,
}: StrategyCardProps) {
  const firstSentence = quote.split('.')[0].trim() + '.';
  const remainingQuote = quote.split('.').slice(1).join('.').trim();

  return (
    <Card
      className={cn(
        "relative overflow-hidden border bg-card/50 p-6 transition-shadow hover:shadow-xl",
        BORDERS[icon],
        className
      )}
    >
      {/* Decorative corner */}
      <div
        className={cn(
          "absolute top-0 left-0 w-24 h-24 rounded-br-[100px] bg-gradient-to-br",
          GRADIENTS[icon]
        )}
      >
        <div className="absolute top-4 left-4">{ICONS[icon]}</div>
      </div>

      {/* Strategy number badge */}
      <div className="flex justify-end mb-8">
        <span className="px-4 py-1 rounded-full bg-background/50 backdrop-blur-sm border border-border text-sm font-medium">
          Strategy #{number}
        </span>
      </div>

      {/* Avatar + Name */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="h-12 w-12 rounded-full object-cover border"
        />
        <div>
          <h3 className="font-semibold text-base">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-[1.05rem] leading-relaxed text-muted-foreground">
        <span className="">{firstSentence} </span>
        {remainingQuote && (
          <span className="text-foreground font-medium">{remainingQuote}</span>
        )}
      </blockquote>
    </Card>
  );
}
