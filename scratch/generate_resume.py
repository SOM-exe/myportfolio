import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def build_pdf(filename="public/SOMS_Resume.pdf"):
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    
    # 0.4 inch margins all around
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=28,
        rightMargin=28,
        topMargin=24,
        bottomMargin=24
    )

    styles = getSampleStyleSheet()

    header_name_style = ParagraphStyle(
        'HeaderName',
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#111827')
    )

    header_contact_style = ParagraphStyle(
        'HeaderContact',
        fontName='Helvetica',
        fontSize=9.5,
        leading=12,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#374151')
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=13,
        textColor=colors.HexColor('#1E293B'),
        spaceAfter=2
    )

    body_style = ParagraphStyle(
        'Body',
        fontName='Helvetica',
        fontSize=9,
        leading=11.5,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#1F2937')
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        fontName='Helvetica',
        fontSize=8.8,
        leading=11.2,
        leftIndent=12,
        firstLineIndent=-8,
        textColor=colors.HexColor('#1F2937'),
        spaceAfter=1.5
    )

    story = []

    # 1. Header Section
    story.append(Paragraph("SHOBHIT SHARMA", header_name_style))
    story.append(Spacer(1, 3))
    
    contact_text = (
        "+91-6265180365 | <a href='mailto:shobhits377@gmail.com' color='#1D4ED8'><u>shobhits377@gmail.com</u></a> | "
        "<a href='https://github.com/SOM-exe' color='#1D4ED8'><u>GitHub</u></a> | "
        "<a href='https://linkedin.com' color='#1D4ED8'><u>LinkedIn</u></a> | "
        "<a href='https://leetcode.com/u/shobhit_377/' color='#1D4ED8'><u>LeetCode (150+ solved)</u></a><br/>"
        "Bhopal, Madhya Pradesh - 462021"
    )
    story.append(Paragraph(contact_text, header_contact_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#334155'), spaceBefore=2, spaceAfter=6))

    def add_section_header(title):
        story.append(Paragraph(title, section_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#64748B'), spaceBefore=1, spaceAfter=4))

    # 2. Career Objective
    add_section_header("CAREER OBJECTIVE")
    obj_text = (
        "B.Tech Computer Science student (Class of 2027) with hands-on experience in full-stack development and IoT systems, "
        "seeking to leverage strong Java and web development skills in a challenging software engineering role. National Runner-Up "
        "at Smart India Hackathon 2025, with a proven ability to design, build, and deploy real-world solutions under time constraints."
    )
    story.append(Paragraph(obj_text, body_style))
    story.append(Spacer(1, 6))

    # 3. Education
    add_section_header("EDUCATION")
    
    edu_data = [
        [
            Paragraph("<b>Lakshmi Narain College of Technology, Bhopal, MP</b><br/><font color='#475569'><i>Bachelor of Technology (B.Tech.), Computer Science — Expected Graduation: 2027</i></font>", body_style),
            Paragraph("<b>CGPA: 7.55/10</b>", ParagraphStyle('RightBold', parent=body_style, alignment=TA_RIGHT))
        ],
        [
            Paragraph("<b>Govt. Model HS School, Madhya Pradesh</b><br/><font color='#475569'><i>Higher Secondary (Class XII) — MPBSE</i></font>", body_style),
            Paragraph("<b>84%</b>", ParagraphStyle('RightBold2', parent=body_style, alignment=TA_RIGHT))
        ],
        [
            Paragraph("<b>Govt. Model HS School, Madhya Pradesh</b><br/><font color='#475569'><i>High School (Class X) — MPBSE</i></font>", body_style),
            Paragraph("<b>83%</b>", ParagraphStyle('RightBold3', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    t_edu = Table(edu_data, colWidths=[430, 126])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 6))

    # 4. Projects
    add_section_header("PROJECTS")

    # Project 1: Eco Breathe
    p1_title = "<b>Eco Breathe</b> (<a href='https://github.com/SOM-exe/EcoBreathe' color='#1D4ED8'><u>GitHub</u></a>) | <i>Smart India Hackathon 2025 — ESP32, PMS Sensor, Adafruit IO, React.js, Node.js, MongoDB, Chart.js</i>"
    story.append(Paragraph(p1_title, body_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Developed a low-cost IoT air quality monitoring network using ESP32 microcontrollers deployed across multiple sensor nodes.", bullet_style))
    story.append(Paragraph("• Measured PM2.5, temperature, and humidity data in real time using PMS and Adafruit sensors, streamed to Adafruit IO over Wi-Fi.", bullet_style))
    story.append(Paragraph("• Built a web dashboard with React.js and Chart.js to visualize live and historical air quality trends, backed by a Node.js/Express API and MongoDB for data storage.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 2: AI Resume Analyzer
    p2_title = "<b>AI Resume Analyzer</b> (<a href='https://github.com/SOM-exe/AI-Resume-Analyzer' color='#1D4ED8'><u>GitHub</u></a>) | <i>React.js, Node.js, Express.js, NLP (Natural Language Processing)</i>"
    story.append(Paragraph(p2_title, body_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Built a web application that parses uploaded resumes and evaluates them against job descriptions using NLP-based keyword and skill matching.", bullet_style))
    story.append(Paragraph("• Generated an ATS-compatibility score along with section-wise feedback (skills, formatting, experience) to help users improve their resumes.", bullet_style))
    story.append(Paragraph("• Designed a React.js frontend for resume upload and results display, with an Express.js backend handling parsing and scoring logic.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 3: MyPortfolio
    p3_title = "<b>MyPortfolio</b> (<a href='https://som-exe.github.io/myportfolio/' color='#1D4ED8'><u>Demo</u></a>) (<a href='https://github.com/SOM-exe/MyPortfolio' color='#1D4ED8'><u>Source Code</u></a>) | <i>React 19, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion, GSAP, Express.js</i>"
    story.append(Paragraph(p3_title, body_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Built a personal portfolio website with React 19, TypeScript, and Vite 6 to showcase projects, skills, and background in a simple, detailed format, featuring a dark-mode UI with Tailwind CSS 4 and custom glassmorphism design tokens.", bullet_style))
    story.append(Paragraph("• Implemented smooth entrance and scroll-triggered animations using Framer Motion and GSAP, along with HLS.js for hardware-accelerated video background playback.", bullet_style))
    story.append(Paragraph("• Integrated real-time LeetCode and GitHub activity heatmaps and the Google GenAI SDK for AI-powered features, backed by an Express.js server for API and environment-variable handling.", bullet_style))
    story.append(Spacer(1, 6))

    # 5. Technical Skills
    add_section_header("TECHNICAL SKILLS")
    skills_text = (
        "<b>Programming Languages:</b> Java, Python, C++, JavaScript<br/>"
        "<b>Web Development:</b> React.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS, REST APIs<br/>"
        "<b>Databases:</b> MySQL, MongoDB<br/>"
        "<b>Core CS Subjects:</b> Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks<br/>"
        "<b>Tools & Platforms:</b> Git, GitHub, VS Code, Postman"
    )
    story.append(Paragraph(skills_text, body_style))
    story.append(Spacer(1, 6))

    # 6. Certifications & Achievements
    add_section_header("CERTIFICATIONS & ACHIEVEMENTS")
    story.append(Paragraph("• <b>Smart India Hackathon (SIH) 2025</b> — Grand Finale Runner-Up", bullet_style))
    story.append(Paragraph("• <b>Microsoft Certified:</b> SQL AI Developer Associate (<a href='https://learn.microsoft.com' color='#1D4ED8'><u>Verify</u></a>)", bullet_style))
    story.append(Paragraph("• <b>JPMorgan Chase & Co.</b> — Software Engineering Job Simulation", bullet_style))
    story.append(Paragraph("• <b>Data Structures and Backend with Java</b>", bullet_style))
    story.append(Paragraph("• <b>Meta</b> — React Basics", bullet_style))
    story.append(Spacer(1, 6))

    # 7. Extracurricular Activities
    add_section_header("EXTRACURRICULAR ACTIVITIES")
    story.append(Paragraph("• Division Level Kabaddi Player", bullet_style))
    story.append(Spacer(1, 6))

    # 8. Languages Known
    add_section_header("LANGUAGES KNOWN")
    story.append(Paragraph("English, Hindi", body_style))

    doc.build(story)
    print(f"Successfully generated {filename}")

if __name__ == '__main__':
    build_pdf("public/SOMS_Resume.pdf")
    build_pdf("dist/SOMS_Resume.pdf")
