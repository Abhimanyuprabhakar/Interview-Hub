import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import Input from '../components/Input.jsx';

function HomePage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <Badge variant="primary">Design foundation</Badge>
          <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl">
            A calm system for serious interview prep.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
            InterviewHub will use warm surfaces, forest green actions, sharp editorial type,
            and small yellow marks for emphasis.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <div className="flex flex-wrap gap-3">
              <Badge variant="accent">Student friendly</Badge>
              <Badge>Thin borders</Badge>
              <Badge variant="primary">Forest green</Badge>
            </div>

            <h2 className="mt-8 text-3xl font-black tracking-tight">
              Reusable pieces, ready before pages.
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              This temporary panel demonstrates buttons, fields, badges, cards, spacing,
              containers, and the default dark theme.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto]">
              <Input aria-label="Search preview" placeholder="Search company, role, or technology" />
              <Button>Search</Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary action</Button>
              <Button variant="ghost">Quiet action</Button>
            </div>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-[color-mix(in_srgb,var(--color-accent)_18%,transparent)] blur-2xl" />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              Type sample
            </p>
            <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight">
              Know the round before the round.
            </h2>
            <p className="mt-5 text-[var(--color-text-muted)]">
              The accent is used like a marker, not decoration everywhere.
            </p>
            <p className="mt-10 text-2xl font-black">
              Prepare with <span className="annotation-mark">confidence</span>.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default HomePage;
