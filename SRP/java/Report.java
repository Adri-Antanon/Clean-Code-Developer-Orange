// Without SRP
class Report {
    void generateReport() {
        // Generates report
    }
    
    void saveToFile() {
        // Saves report to a file
    }
}

// With SRP
class ReportSRP {
    void generateReport() {
        // Generates report
    }
}

class ReportSaver {
    void saveToFile(Report report) {
        // Saves report to a file
    }
}
