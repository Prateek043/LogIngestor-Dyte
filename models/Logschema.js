const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  resourceId: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  traceId: {
    type: String,
    required: true
  },
  spanId: {
    type: String,
    required: true
  },
  commit: {
    type: String,
    required: true
  },
  metadata: {
    parentResourceId: {
      type: String,
      required: true
    }
  }
});

const Logs = mongoose.model('Logs', LogSchema);

module.exports = Logs;
