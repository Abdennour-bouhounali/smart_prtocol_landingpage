const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const publicRoutes = require('./routes/public.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || '*' })); // Restrict in production
app.use(express.json({ limit: '10kb' })); // Limit body payload size

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: 'Too many requests from this IP, please try again after 15 minutes',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', apiLimiter);

app.use('/api', publicRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
