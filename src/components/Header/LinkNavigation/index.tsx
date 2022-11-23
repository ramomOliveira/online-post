import Link from 'next/link';
import { Container } from './style';

interface LinkNavigationProps {
  title: string;
  href: string;
  active: boolean;
}

export default function LinkNavigation({
  title,
  href,
  active,
}: LinkNavigationProps) {
  return (
    <Container active={active}>
      <Link href={href}>{title}</Link>
    </Container>
  );
}
