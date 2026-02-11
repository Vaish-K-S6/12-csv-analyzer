import csv

def analyze_csv(file_name):
    marks = []

    with open(file_name, "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            try:
                marks.append(int(row["marks"]))
            except:
                continue

    if not marks:
        print("No valid data found.")
        return

    total_rows = len(marks)
    average = sum(marks) / total_rows
    highest = max(marks)
    lowest = min(marks)

    print("📊 CSV ANALYSIS REPORT")
    print("Total Students:", total_rows)
    print("Average Marks:", round(average, 2))
    print("Highest Marks:", highest)
    print("Lowest Marks:", lowest)


if __name__ == "__main__":
    analyze_csv("data.csv")
