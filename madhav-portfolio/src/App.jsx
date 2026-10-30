
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowDownRight,
  Cloud,
  ShieldCheck,
  BrainCircuit,
  Workflow,
  Terminal,
  MapPin,
  Code,
  Code2,
  Award,
  Mail,
  FileText,
  GitBranch
} from 'lucide-react';
import { profile as p } from './config';

const skills = [
  [
    'Cloud & Platform',
    'Microsoft Azure',
    'Azure DevOps',
    'Azure Landing Zones',
    'AWS',
    'Docker',
    'Kubernetes',
    'Azure Container Apps'
  ],
  [
    'Infrastructure & Delivery',
    'Terraform',
    'Infrastructure as Code',
    'CI/CD',
    'Jenkins',
    'Git',
    'GitHub',
    'PowerShell',
    'Bash'
  ],
  [
    'Security & Observability',
    'SonarQube',
    'Checkov',
    'Trivy',
    'Microsoft Defender for Cloud',
    'Azure Key Vault',
    'Prometheus',
    'Grafana'
  ],
  [
    'Development & AI',
    'Python',
    'Java',
    'JavaScript',
    'React',
    'Flask',
    'Django',
    'SQL',
    'Claude API',
    'MCP',
    'AI Agents'
  ]
];

const fade = {
  hidden: {
    opacity: 0,
    y: 18
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function Heading({ eyebrow, title, copy }) {
  return (
    <div className="heading">
      <small>{eyebrow}</small>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function Social({ Icon, label, href }) {
  return (
    <a
      className="social"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Icon size={16} />
      {label}
      <ArrowUpRight size={13} />
    </a>
  );
}

export default function App() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#top">
          <b>M.</b> MADHAV ASHRIT
        </a>

        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
        </div>

        <a className="navbutton" href={'mailto:' + p.email}>
          Let's talk ↗
        </a>
      </nav>

      <section className="hero wrap" id="top">
        <div>
          <div className="eyebrow">
            <i /> OPEN TO EXCITING OPPORTUNITIES
          </div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fade}
          >
            Building reliable
            <br />
            <em>cloud systems</em>
            <br />
            with a little AI.
          </motion.h1>

          <p className="intro">
            I'm Madhav — a software engineer working across Azure,
            DevOps, infrastructure automation and AI-powered
            developer tools.
          </p>

          <div className="actions">
            <a className="primary" href="#work">
              Explore my work <ArrowDownRight size={16} />
            </a>

            <a
                className="outline"
                href={p.links.resume}
                target="_blank"
                rel="noopener noreferrer"
            >
              View resume <FileText size={15} />
            </a>
          </div>

          <div className="meta">
            <span>
              <MapPin size={14} />
              {p.location}
            </span>
            <span>Cloud · DevOps · AI</span>
          </div>
        </div>

        <div className="visual">
          <div className="ring r1" />
          <div className="ring r2" />

          <div className="terminal">
            <div className="termhead">
              <span>● ● ●</span> madhav@cloud-engineer ~
            </div>

            <div className="termbody">
              <p className="cmd">$ whoami</p>
              <h3>Madhav Ashrit</h3>

              <p className="cmd">$ focus --areas</p>
              <p className="green">
                Azure Infrastructure
                <br />
                DevSecOps Automation
                <br />
                AI Developer Tools
              </p>

              <p className="cmd">$ status</p>
              <p>
                Building what's next
                <span className="cursor">_</span>
              </p>
            </div>
          </div>

          <div className="float f1">
            <Cloud /> Cloud & IaC
          </div>

          <div className="float f2">
            <ShieldCheck /> DevSecOps
          </div>
        </div>
      </section>

      <div className="ticker">
        INFRASTRUCTURE AS CODE　✳　CONTINUOUS DELIVERY　✳　CLOUD
        SECURITY　✳　AI-ASSISTED ENGINEERING　✳
      </div>

      <section className="section wrap" id="about">
        <Heading
          eyebrow="01 — ABOUT ME"
          title={
            <>
              Engineering the path
              <br />
              from code to cloud.
            </>
          }
        />

        <div className="about">
          <h3>
            I enjoy turning complex infrastructure and delivery
            challenges into systems that are repeatable, secure
            and easier for engineering teams to operate.
          </h3>

          <div>
            <p>
              At Version 1, I work across Azure infrastructure,
              Terraform, Azure DevOps pipelines and DevSecOps
              practices. I also enjoy building software, exploring
              LLM-powered workflows and finding practical ways to
              bring AI into everyday engineering.
            </p>

            <p>
              I'm particularly interested in cloud platform
              engineering, developer experience, automation and
              the intersection of AI and DevOps.
            </p>

            <div className="socials">
              <Social
                Icon={Code2}
                label="LinkedIn"
                href={p.links.linkedin}
              />

              <Social
                Icon={Code}
                label="GitHub"
                href={p.links.github}
              />

              {/* <Social
                Icon={Code2}
                label="LeetCode"
                href={p.links.leetcode}
              /> */}

              <Social
                Icon={Award}
                label="Credly"
                href={p.links.credly}
              />
            </div>
          </div>
        </div>

        <div className="stats">
          <div>
            <b>03</b>
            <span>Azure Landing Zones</span>
          </div>

          <div>
            <b>~30</b>
            <span>Reusable Terraform modules</span>
          </div>

          <div>
            <b>82%</b>
            <span>Database cost reduction</span>
          </div>

          <div>
            <b>58</b>
            <span>Repositories in project scope</span>
          </div>
        </div>
      </section>

      <section className="section dark" id="work">
        <div className="wrap">
          <Heading
            eyebrow="02 — SELECTED WORK"
            title="Projects with a purpose."
            copy="A few things I've built at the intersection of software, cloud and automation."
          />

          <div className="projects">
            <article>
              <div className="art">
                <div className="artbox">
                  <BrainCircuit size={40} />
                  <p>
                    › analyze_pipeline()
                    <br />
                    <span>
                      ✓ failure diagnosed
                      <br />
                      ✓ remediation suggested
                      <br />
                      ✓ YAML generated
                    </span>
                  </p>
                </div>
              </div>

              <small>01 / AI & DEVELOPER TOOLING</small>
              <h3>AI-Powered DevOps Assistant</h3>

              <p>
                A full-stack assistant that analyzes CI/CD failures,
                explains Azure deployment errors and generates
                Azure DevOps YAML pipelines with contextual guidance
                from Claude.
              </p>

              <div className="tags">
                Python　 React　 Claude API　 Docker　 Azure DevOps
              </div>

              <a
                className="projectlink"
                href={p.links.devopsAssistant}
                target="_blank"
                rel="noreferrer"
              >
                View project <ArrowUpRight size={15} />
              </a>
            </article>

            <article>
              <div className="art art2">
                <div className="artbox">
                  <Workflow size={40} />
                  <div className="squares">
                    □　□　□
                    <br />
                    □　□　□
                  </div>
                </div>
              </div>

              <small>02 / FULL-STACK & MICROSERVICES</small>
              <h3>Workspace Management Application</h3>

              <p>
                A microservices-based application for workspace
                profiles, space bookings and payment processing,
                built with a Python backend and containerized
                delivery workflow.
              </p>

              <div className="tags">
                Python　 Django　 Jenkins　 Docker　 Kubernetes　 SQL
              </div>

              <a
                className="projectlink"
                href={p.links.github}
                target="_blank"
                rel="noreferrer"
              >
                Explore GitHub <ArrowUpRight size={15} />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section wrap" id="skills">
        <Heading
          eyebrow="03 — TOOLKIT"
          title="Tools I work with."
          copy="A growing toolkit for building, shipping and securing modern applications and infrastructure."
        />

        <div className="skillgrid">
          {skills.map(([name, ...items], i) => (
            <div className="skill" key={name}>
              <div className="skillicon">
                {[<Cloud />, <GitBranch />, <ShieldCheck />, <BrainCircuit />][i]}
              </div>

              <h3>{name}</h3>

              <div className="tags">
                {items.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark" id="journey">
        <div className="wrap">
          <Heading
            eyebrow="04 — THE JOURNEY"
            title="Experience & education."
          />

          <div className="timeline">
            <article>
              <small>MAR 2025 — PRESENT</small>

              <div>
                <h3>
                  Associate Software Engineer <span>· Version 1</span>
                </h3>

                <p>
                  Working across Azure Landing Zones, Terraform-based
                  infrastructure, Azure DevOps CI/CD, DevSecOps
                  controls and client-facing delivery. Built reusable
                  infrastructure templates and contributed to secure,
                  repeatable cloud operations.
                </p>
              </div>
            </article>

            <article>
              <small>OCT 2024 — FEB 2025</small>

              <div>
                <h3>
                  Research Analyst <span>· Edureka</span>
                </h3>

                <p>
                  Built and integrated REST APIs and microservices,
                  and worked with Docker and Kubernetes to support
                  deployment workflows and application reliability.
                </p>
              </div>
            </article>

            <article>
              <small>AUG 2020 — MAY 2024</small>

              <div>
                <h3>
                  B.E. Computer Science <span>· KSIT, VTU</span>
                </h3>

                <p>
                  Graduated with a CGPA of 9.07. Coursework included
                  data structures, algorithms, databases, computer
                  systems and machine learning.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="certhead">
          <Heading
            eyebrow="05 — CONTINUOUS LEARNING"
            title="Certifications."
          />

          <a
            className="projectlink"
            href={p.links.credly}
            target="_blank"
            rel="noreferrer"
          >
            View Credly profile ↗
          </a>
        </div>

        <div className="certs">
          {[
            [
              'HashiCorp Certified: Terraform Associate (004)',
              'HashiCorp · Jun 2026 – Jun 2028'
            ],
            [
              'AWS Certified AI Practitioner',
              'AWS · Aug 2024 – Aug 2028'
            ],
            [
              'Microsoft Certified: Azure Fundamentals',
              'Microsoft · Jan 2026'
            ],
            [
              'Microsoft Certified: Azure AI Fundamentals',
              'Microsoft · Dec 2022'
            ]
          ].map(([a, b]) => (
            <div key={a}>
              <Award />
              <b>
                {a}
                <small>{b}</small>
              </b>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <div className="wrap">
          <small>HAVE A GOOD CHALLENGE?</small>

          <h2>
            Let's build something
            <br />
            <em>that matters.</em>
          </h2>

          <p>
            Open to conversations about software engineering,
            cloud, DevOps and AI opportunities.
          </p>

          <a className="primary" href={'mailto:' + p.email}>
            <Mail size={16} />
            Get in touch
            <ArrowUpRight size={16} />
          </a>

          <div>{p.email}</div>
        </div>
      </section>

      <footer className="footer wrap">
        <b>M.　MADHAV ASHRIT</b>
        <span>Designed & built with React · 2026</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
