from donor.models import Donor

def find_matching_donors(blood_group, city=None):

    compatibility = {
        'O-': ['O-'],
        'O+': ['O+', 'O-'],
        'A-': ['A-', 'O-'],
        'A+': ['A+', 'A-', 'O+', 'O-'],
        'B-': ['B-', 'O-'],
        'B+': ['B+', 'B-', 'O+', 'O-'],
        'AB-': ['AB-', 'A-', 'B-', 'O-'],
        'AB+': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    }

    groups = compatibility.get(blood_group, [])

    donors = Donor.objects.filter(
        blood_group__in=groups,
        available=True
    )

    if city:
        donors = donors.filter(city=city)

    return donors

def clean_blood_group(bg):
    return bg.replace("ve", "").replace(" ", "").strip().upper()