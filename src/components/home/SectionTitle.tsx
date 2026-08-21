import styles from "./SectionTitle.module.css";

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={`${styles.sectionTitle} ${className ?? ""}`}>{children}</h2>;
}
