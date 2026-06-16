type BadgeProps = { children: string };

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-fg-soft">
      {children}
    </span>
  );
}
