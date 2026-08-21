import styles from "./Section.module.css";

export function Section({
  id,
  className,
  narrow,
  children,
}: {
  id: string;
  className?: string;
    narrow?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${styles.section} ${className ?? ""}`}>
      {narrow ? <div className={styles.inner}>{children}</div> : children}
    </section>
  );
}
