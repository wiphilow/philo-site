import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Script from "next/script"
import { useEffect } from "react"

export default function BlogPost() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Plotly && !document.getElementById("plot").hasChildNodes()) {
      const experiences = [
        { experience: "Research Coordinator", dimension: "Work Experience", description: "Assisted in behavioral tasks & MRI setup for toddlers", research: 6, pm: 9, bubble: 3, date: "" },
        { experience: "Teaching Assistant", dimension: "Work Experience", description: "Led end-to-end development of wearable + API integration", research: 3, pm: 2, bubble: 3, date: "" },
        { experience: "MRI Research Assistant", dimension: "Internship", description: "Designed and analyzed visual attention EEG study", research: 8, pm: 3, bubble: 3, date: "" },
        { experience: "Bioelectronics Research Volunteer", dimension: "Activities", description: "Analyzed patient data for tumor DNA structure and behavior", research: 9, pm: 2, bubble: 3, date: "" },
        { experience: "Director of Events Planning", dimension: "Work Experience", description: "Designed social connectedness experiment, ran EMG recordings", research: 0, pm: 10, bubble: 3, date: "" },
        { experience: "Japanese Club President", dimension: "Activities", description: "Organized presentation for interdisciplinary audience", research: 1, pm: 9, bubble: 3, date: "" },
        { experience: "Physical Therapy Aide", dimension: "Work Experience", description: "Led recruitment & protocol for 3 AI + health studies", research: 1, pm: 2, bubble: 3, date: "" }
      ];

      const trace = {
        x: experiences.map(d => d.pm),
        y: experiences.map(d => d.research),
        text: experiences.map(d => `${d.experience} (${d.dimension})`),
        customdata: experiences.map(d => d),
        mode: 'markers',
        type: 'scatter',
        marker: {
          size: experiences.map(d => d.bubble * 10),
          color: '#2a72b9'
        },
        hovertemplate: '%{text}<extra></extra>'
      };

      const layout = {
        title: 'Experience Ratings',
        xaxis: { title: 'Project Management Rating', range: [0, 10], fixedrange: true },
        yaxis: { title: 'Research Rating', range: [0, 10], fixedrange: true },
        margin: { l: 60, r: 30, t: 60, b: 60 }
      };

      window.Plotly.newPlot('plot', [trace], layout, { displayModeBar: false });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Script src="https://cdn.plot.ly/plotly-latest.min.js" strategy="beforeInteractive" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h1 className="text-2xl font-bold text-gray-900">Philo Katzman</h1>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <time className="text-lg text-gray-600">6/22/2025</time>
              <h2 className="text-2xl font-semibold text-gray-900">Hello World!</h2>
            </div>

            {/* Plotly Chart */}
            <div id="plot" className="w-full h-[500px]" />

            <div className="flex items-center justify-center space-x-8 pt-8">
              <Link href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <ChevronLeft className="w-5 h-5" />
                <span>Previous Page</span>
              </Link>

              <Link href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <span>Next Page</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <nav className="space-y-4">
              <Link href="/projects" className="block text-lg text-gray-900 hover:text-gray-600 transition-colors">Projects</Link>
              <Link href="/resume" className="block text-lg text-gray-900 hover:text-gray-600 transition-colors">Resume</Link>
              <Link href="/tangents" className="block text-lg text-gray-900 hover:text-gray-600 transition-colors">Tangents and {'Ted Talks'}</Link>
              <Link href="/about" className="block text-lg text-gray-900 hover:text-gray-600 transition-colors">About Me</Link>
              <Link href="/linkedin" className="block text-lg text-gray-900 hover:text-gray-600 transition-colors">LinkedIn</Link>
              <Link href="/more" className="block text-lg text-gray-900 hover:text-gray-600 transition-colors">More</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
