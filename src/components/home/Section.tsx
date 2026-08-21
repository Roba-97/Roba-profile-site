import styles from "./Section.module.css";

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${styles.section} ${className ?? ""}`}>
      {children}
    </section>
  );
}
