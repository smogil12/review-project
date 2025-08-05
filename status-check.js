const http = require('http');

console.log('🔍 Checking application status...\n');

// Check React app (port 3000)
const checkReact = () => {
  return new Promise((resolve) => {
    const req = http.get('http://localhost:3000', (res) => {
      if (res.statusCode === 200) {
        resolve('✅ React app is running on http://localhost:3000');
      } else {
        resolve('❌ React app error: ' + res.statusCode);
      }
    });
    
    req.on('error', () => {
      resolve('❌ React app is not running');
    });
    
    req.setTimeout(3000, () => {
      req.destroy();
      resolve('❌ React app timeout');
    });
  });
};

// Check Express backend (port 3001)
const checkBackend = () => {
  return new Promise((resolve) => {
    const req = http.get('http://localhost:3001/api/health', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const health = JSON.parse(data);
          if (health.status === 'OK') {
            resolve('✅ Backend is running on http://localhost:3001');
          } else {
            resolve('❌ Backend health check failed');
          }
        } catch (e) {
          resolve('❌ Backend response invalid');
        }
      });
    });
    
    req.on('error', () => {
      resolve('❌ Backend is not running');
    });
    
    req.setTimeout(3000, () => {
      req.destroy();
      resolve('❌ Backend timeout');
    });
  });
};

// Run checks
async function runChecks() {
  const [reactStatus, backendStatus] = await Promise.all([
    checkReact(),
    checkBackend()
  ]);
  
  console.log(reactStatus);
  console.log(backendStatus);
  console.log('\n🎉 Your application should be accessible at:');
  console.log('   Frontend: http://localhost:3000');
  console.log('   Backend API: http://localhost:3001/api/health');
  console.log('\n📱 Try opening http://localhost:3000 in your browser!');
}

runChecks(); 