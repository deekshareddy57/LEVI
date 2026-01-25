import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "outline";
    className?: string;
}

export default function Button({ children, href, variant = "primary" }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all focus:ring-4 focus:ring-greek-accent/30 focus:outline-none";

    const variants = {
        primary: "bg-greek-primary text-greek-parchment hover:bg-greek-secondary hover:shadow-lg",
        outline: "border-2 border-greek-primary text-greek-primary hover:bg-greek-primary/5",
    };

    if (href) {
        return (
            <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
                {children}
            </Link>
        );
    }

    return <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>;
}