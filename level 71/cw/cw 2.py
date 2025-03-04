def get_grade(score1, score2, score3):
    average_score = (score1 + score2 + score3) / 3
    if 90 <= average_score <= 100:
        return 'A'
    elif 80 <= average_score <= 90:
        return 'B'
    elif 70 <= average_score <= 80:
        return 'C'
    elif 60 <= average_score <= 70:
        return 'D'
    else:
        return 'F'