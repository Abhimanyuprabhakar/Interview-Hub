import Badge from './Badge';
import Button from './Button';
import Card from './Card';
import Container from './Container';
import Input from './Input';

function Hero() {
  const popularSearches = ['Java', 'Spring Boot', 'DSA', 'Accenture', 'TCS', 'Fresher'];

  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="max-w-2xl">
            <Badge variant="accent" className="mb-6">A community by students, for students</Badge>
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl text-[var(--color-text)]">
              Know what's coming. Prepare with <span className="annotation-mark">confidence</span>.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)] max-w-xl">
              Real interview experiences, questions, and insights shared by candidates who've been there.
            </p>
            
            {/* Search Box */}
            <div className="mt-10 max-w-xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-[var(--color-text-muted)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <Input 
                    aria-label="Search" 
                    placeholder="Search company, role, or technology..." 
                    className="pl-10 h-12 shadow-[var(--shadow-subtle)]"
                  />
                </div>
                <Button className="h-12 px-8 shadow-[var(--shadow-subtle)]">Explore experiences</Button>
              </div>
              
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                <span className="text-[var(--color-text-muted)] font-medium">Popular:</span>
                {popularSearches.map((term) => (
                  <button 
                    key={term}
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-primary-strong)] hover:underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 transition-all"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <span className="text-sm font-medium text-[var(--color-text-muted)]">Have an experience to share?</span>
              <Button variant="secondary" className="h-10 text-sm">Share your experience</Button>
            </div>
          </div>

          {/* Right Side: Visual */}
          <div className="relative lg:ml-auto w-full max-w-lg perspective-1000">
            {/* Background decorative blob */}
            <div className="absolute -inset-4 z-0 rounded-[3rem] bg-gradient-to-tr from-[var(--color-primary-soft)] to-[var(--color-accent-soft)] opacity-40 blur-2xl" />
            
            {/* Mock Interview Experience Card */}
            <Card className="relative z-10 transform-gpu transition-transform hover:-translate-y-2 hover:shadow-[var(--shadow-soft)] border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)] rotate-[2deg]">
              
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-[var(--color-border)]">
                    <span className="text-xl font-bold text-blue-600">G</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight text-[var(--color-text)]">Software Engineer (L3)</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">Google • Bangalore, India</p>
                  </div>
                </div>
                <button aria-label="Save" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                  </svg>
                </button>
              </div>

              {/* Badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge variant="neutral">Offer Extended</Badge>
                <Badge variant="neutral">Medium Difficulty</Badge>
                <Badge variant="neutral">4 Rounds</Badge>
              </div>

              <hr className="my-5 border-[var(--color-border)]" />

              {/* Rounds Info */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">Interview Process</h4>
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-xs font-bold text-[var(--color-primary-strong)]">1</div>
                    <span className="text-sm font-medium">Online Assessment (DSA)</span>
                  </div>
                  <div className="ml-3 mt-2 border-l-2 border-[var(--color-border)] pl-4 py-1">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-md bg-[var(--color-bg)] px-2 py-1 text-xs font-medium text-[var(--color-text-muted)] ring-1 ring-inset ring-[var(--color-border)]">Arrays</span>
                      <span className="inline-flex items-center rounded-md bg-[var(--color-bg)] px-2 py-1 text-xs font-medium text-[var(--color-text-muted)] ring-1 ring-inset ring-[var(--color-border)]">Dynamic Programming</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-xs font-bold text-[var(--color-primary-strong)]">2</div>
                    <span className="text-sm font-medium">Technical Round (System Design)</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-5 border-t border-[var(--color-border)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
                  <span className="text-xs font-medium text-[var(--color-text-muted)]">Posted 2 days ago</span>
                </div>
                <span className="text-xs font-semibold text-[var(--color-primary)] hover:underline cursor-pointer">Read full experience →</span>
              </div>
            </Card>

            {/* Decorative hand-drawn elements */}
            <div className="absolute -bottom-6 -right-6 z-20 transform -rotate-12">
              <div className="bg-[var(--color-accent)] text-[#3a3117] text-xs font-bold px-3 py-1 rounded-sm shadow-md border border-[#3a3117] transform -skew-x-6">
                Real questions!
              </div>
              <svg className="w-6 h-6 ml-2 text-[var(--color-accent)] transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;
