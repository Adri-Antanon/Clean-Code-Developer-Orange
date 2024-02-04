// Without Separation of Concerns
class Report {
    void generateReport() {
        // Generates report

        // Logs report generation
        Logger.log("Report generated");

        // Handles transactions
        TransactionManager.commit();
        
        // Caches the report
        CacheManager.cacheReport(this);
    }
}

// With Separation of Concerns
class ReportSoC {
    void generateReport() {
        // Generates report
    }
}

class Logger {
    static void log(String message) {
        // Log the message
    }
}

class TransactionManager {
    static void commit() {
        // Commit the transaction
    }
}

class CacheManager {
    static void cacheReport(Report report) {
        // Cache the report
    }
}
