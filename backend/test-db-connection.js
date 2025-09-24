const { Client } = require("pg");
require('dotenv').config();

const client = new Client(process.env."postgresql://preet:62prteoBlHN-V-B5scoytw@cyberdetective-16174.j77.aws-ap-south-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full");

(async () => {
  console.log('Testing Blog-X CockroachDB connection...');

  try {
    await client.connect();
    console.log('✅ Connected to CockroachDB successfully!');

    const results = await client.query("SELECT NOW() as current_time, version() as db_version");
    console.log('📅 Current time:', results.rows[0].current_time);
    console.log('🗄️  Database version:', results.rows[0].db_version);

    // Test creating a simple table
    await client.query(`
      CREATE TABLE IF NOT EXISTS connection_test (
        id SERIAL PRIMARY KEY,
        test_message TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log('✅ Test table created successfully!');

    // Insert test data
    await client.query(`
      INSERT INTO connection_test (test_message) 
      VALUES ('Blog-X CockroachDB connection test successful!')
    `);
    console.log('✅ Test data inserted successfully!');

    // Query test data
    const testResults = await client.query('SELECT * FROM connection_test ORDER BY created_at DESC LIMIT 1');
    console.log('📝 Test data:', testResults.rows[0]);

    // Clean up
    await client.query('DROP TABLE connection_test');
    console.log('🧹 Test table cleaned up');

    console.log('\n🎉 Database connection test completed successfully!');

  } catch (err) {
    console.error("❌ Error connecting to database:", err.message);
    console.error("Full error:", err);
  } finally {
    await client.end();
    console.log('🔌 Database connection closed');
  }
})();