# Elena & Marina - Wedding Website

A beautiful wedding website built with Astro for Elena & Marina's special day.

## 🎉 About

This website showcases the wedding celebration of Elena & Marina, featuring:
- Wedding ceremony details
- Pre-wedding celebration (Preboda)
- Accommodation recommendations
- Car rental information
- Local recommendations for guests
- Venue information (Finca Tagamanent)

## 🚀 Project Structure

```text
/
├── public/
│   ├── fonts/                    # Custom fonts (Gambetta, Stardom, Switzer)
│   ├── accomodation/            # Hotel images
│   ├── car-rental/              # Car rental company logos
│   ├── recommendations/         # Local attraction images
│   ├── tagamanent/             # Venue images
│   └── preboda/                # Pre-wedding event images
├── src/
│   ├── assets/                  # SVG assets
│   ├── components/              # Reusable components
│   ├── layouts/
│   │   └── Layout.astro         # Main layout template
│   ├── pages/                   # Website pages
│   │   ├── index.astro          # Home page
│   │   ├── accommodation.astro  # Hotel recommendations
│   │   ├── car-rental.astro     # Car rental options
│   │   ├── finca.astro          # Venue information
│   │   ├── preboda.astro        # Pre-wedding celebration
│   │   └── recommendations.astro # Local recommendations
│   └── styles/                  # Custom CSS files
├── astro.config.mjs             # Astro configuration
├── tailwind.config.mjs          # Tailwind CSS configuration
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Custom Fonts**: Gambetta, Stardom, and Switzer typography
- **Interactive Elements**: Hover effects and smooth transitions
- **Google Calendar Integration**: Easy event scheduling
- **Maps Integration**: Location links for venues and transportation
- **Charitable Component**: Preboda bingo musical supports animal welfare

## 🛠️ Technologies Used

- **Astro**: Static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Fonts**: Local font files for unique typography
- **AOS (Animate On Scroll)**: Scroll animations
- **Google Maps**: Location integration

## 📱 Pages

- **Home**: Main wedding information
- **Preboda**: Pre-wedding celebration details with charitable bingo musical
- **Accommodation**: Hotel recommendations for guests
- **Car Rental**: Transportation options
- **Finca**: Wedding venue information (Finca Tagamanent)
- **Recommendations**: Local attractions and activities

## 🎯 Special Features

- **Preboda Event**: Musical bingo with charitable purposes supporting "Quina Animalada de Sencelles"
- **Transportation Guide**: Detailed instructions for getting to venues
- **Calendar Integration**: One-click event addition to Google Calendar
- **Multilingual Support**: Spanish content with international accessibility
