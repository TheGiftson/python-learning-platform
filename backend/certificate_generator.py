from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph
from datetime import datetime
import os

def create_certificate(name, cert_id, issued_date):
    """Generate a PDF certificate for course completion"""
    
    # Create certificates directory if it doesn't exist
    os.makedirs('certificates', exist_ok=True)
    
    filename = f'certificates/certificate_{cert_id}.pdf'
    c = canvas.Canvas(filename, pagesize=A4)
    width, height = A4
    
    # Background border
    c.setStrokeColor(colors.HexColor('#0ea5e9'))
    c.setLineWidth(10)
    c.rect(30, 30, width - 60, height - 60, stroke=1, fill=0)
    
    c.setStrokeColor(colors.HexColor('#7c3aed'))
    c.setLineWidth(3)
    c.rect(45, 45, width - 90, height - 90, stroke=1, fill=0)
    
    # Title
    c.setFont("Helvetica-Bold", 48)
    c.setFillColor(colors.HexColor('#0ea5e9'))
    c.drawCentredString(width / 2, height - 120, "Certificate of Completion")
    
    # Subtitle
    c.setFont("Helvetica", 20)
    c.setFillColor(colors.black)
    c.drawCentredString(width / 2, height - 160, "This is to certify that")
    
    # Name
    c.setFont("Helvetica-Bold", 36)
    c.setFillColor(colors.HexColor('#7c3aed'))
    c.drawCentredString(width / 2, height - 220, name)
    
    # Achievement text
    c.setFont("Helvetica", 18)
    c.setFillColor(colors.black)
    c.drawCentredString(width / 2, height - 270, "has successfully completed the")
    
    # Course name
    c.setFont("Helvetica-Bold", 28)
    c.setFillColor(colors.HexColor('#0ea5e9'))
    c.drawCentredString(width / 2, height - 320, "Learn Python with Giftson")
    
    # Course description
    c.setFont("Helvetica", 16)
    c.setFillColor(colors.black)
    c.drawCentredString(width / 2, height - 360, "Complete Python Programming Course")
    c.drawCentredString(width / 2, height - 385, "From Beginner to Professional Level")
    
    # Date
    c.setFont("Helvetica", 14)
    date_str = issued_date.strftime("%B %d, %Y")
    c.drawCentredString(width / 2, height - 450, f"Issued on: {date_str}")
    
    # Certificate ID
    c.setFont("Helvetica", 10)
    c.setFillColor(colors.gray)
    c.drawCentredString(width / 2, height - 480, f"Certificate ID: {cert_id}")
    
    # Signature line
    c.setStrokeColor(colors.black)
    c.setLineWidth(1)
    c.line(width / 2 - 100, 150, width / 2 + 100, 150)
    
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(colors.black)
    c.drawCentredString(width / 2, 130, "Giftson")
    
    c.setFont("Helvetica", 12)
    c.drawCentredString(width / 2, 110, "Course Instructor")
    
    # Footer
    c.setFont("Helvetica-Oblique", 10)
    c.setFillColor(colors.gray)
    c.drawCentredString(width / 2, 60, "Learn Python with Giftson - Online Python Programming Course")
    
    c.save()
    return filename
