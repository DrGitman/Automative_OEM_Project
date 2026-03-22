import requests
from bs4 import BeautifulSoup
import json
import os
import random

class ScraperService:
    @staticmethod
    def get_common_issues(make: str, model: str):
        """
        Scrapes common issues for a specific car make and model.
        In a production environment, this would target specific trusted domains.
        For this implementation, we simulate a targeted search then parse the results.
        """
        # Placeholder for real scraping logic 
        # Using a simulated knowledge base for common cars in this app (Hilux, Tesla Model 3, Ford Transit)
        knowledge_base = {
            "Toyota Hilux": [
                "Injector failure (common in 2.8L diesel engines)",
                "DPF (Diesel Particulate Filter) blockages",
                "Clutch wear in manual transmissions"
            ],
            "Tesla Model 3": [
                "Brake caliper sticking (due to regenerative braking underuse)",
                "Cabin noise from window seals",
                "Control arm bushing wear"
            ],
            "Ford Transit": [
                "Timing chain tensioner failure",
                "EGR valve blockages",
                "Fuel pump failure"
            ]
        }
        
        key = f"{make} {model}"
        return knowledge_base.get(key, ["Regular maintenance recommended for this model."])

    @staticmethod
    def get_maintenance_tips():
        """
        Fetches general maintenance tips for vehicle owners.
        """
        tips = [
            {"title": "Check Tire Pressure", "advice": "Check your tire pressure at least once a month and before long trips for better fuel efficiency and safety."},
            {"title": "Keep it Clean", "advice": "Regularly washing your car, including the undercarriage, helps prevent rust and paint damage."},
            {"title": "Monitor Fluid Levels", "advice": "Keep an eye on oil, coolant, and brake fluid levels between services."},
            {"title": "Brake Inspection", "advice": "If you hear squealing or feel vibrations when braking, have your pads inspected immediately."},
            {"title": "Battery Health", "advice": "Clean battery terminals and ensure connections are tight to prevent starting issues."},
            {"title": "Air Filter", "advice": "Replace your engine air filter annually to maintain performance and fuel economy."}
        ]
        return random.sample(tips, 3)

    @staticmethod
    def scrape_real_data(url: str):
        """
        A generic scraper method to fetch content from a URL.
        """
        try:
            response = requests.get(url, timeout=10)
            if response.status_code == 200:
                soup = BeautifulSoup(response.text, 'html.parser')
                # Basic extraction of paragraphs
                paragraphs = soup.find_all('p')
                return " ".join([p.text for p in paragraphs[:3]])
        except Exception as e:
            print(f"Scraping error: {e}")
        return ""
