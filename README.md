# Flipside | Project AegisFlow

**Secure value. Faster movement.**

AegisFlow is a proposed cryptocurrency-based financial platform focused on secure payments and fast digital asset transfers for individuals and businesses. The concept draws on Flipside's background in blockchain data, analytics, and interpreting onchain activity.

“Aegis” represents protection, while “Flow” reflects the efficient movement of digital value.

## Project status

**Planning draft — October 13, 2026.**

AegisFlow is a working name, and the capabilities described here are planned. This repository currently contains planning materials; the Node.js application, `package.json`, and npm scripts have not yet been added. Development milestones, launch dates, and performance benchmarks remain unconfirmed.

## Objective

Build a secure and efficient foundation for cryptocurrency payments and digital asset transfers, with clear transaction information and reliable service as usage grows.

## Planned capabilities

- **Send and receive cryptocurrency:** Support payments and digital asset transfers.
- **Track transactions:** Provide clear payment status and transaction history.
- **Authorize transfers securely:** Apply strong wallet authorization and authentication.
- **Explain payment details:** Show recipients, network fees, and transaction status before and after sending funds.
- **Support business integrations:** Explore APIs for initiating and tracking payments, subject to the final product scope.

The initial concept focuses on sending, receiving, and monitoring payments. Broader financial applications are a longer-term ambition.

## Technical priorities

### Security by design

Prioritize secure key management, robust authentication, transaction authorization, and independent security review before launch. The custody model will be selected during architecture planning.

### Fast and dependable transactions

Evaluate transaction processing and settlement approaches against measurable speed, cost, and reliability goals. Performance claims will depend on the selected blockchain network and testing results.

### Scalable infrastructure

Design transaction services and monitoring to support growing demand while maintaining accurate payment status and operational resilience.

### Clear user experience

Make payment information understandable so users can review transfers and follow their progress confidently.

## Technology direction

| Area | Planned approach |
| --- | --- |
| Application runtime | Node.js |
| Package management and scripts | npm |
| Blockchain network | To be selected during technical planning |
| Supported assets | To be defined |
| Wallet and custody model | To be decided during architecture planning |
| Payment APIs | To be evaluated against the final product scope |
| Performance targets | To be defined and validated through testing |

## Getting started

### Prerequisites

- Node.js with npm installed.
- The Node.js application source and a `package.json` containing a `start` script.

### Install dependencies

From the project root, run:

```bash
npm install
```

### Start the application

```bash
npm start
```

These are the intended setup commands. They will become runnable once the application and its npm configuration are implemented. Required environment variables, service connections, and the application address will be documented as those choices are confirmed.

## Planning roadmap

1. Confirm the initial product scope and payment flows.
2. Select the blockchain network, supported assets, and custody model.
3. Define security requirements and measurable performance targets.
4. Implement the Node.js application and core payment workflows.
5. Validate transaction tracking, reliability, and scalability.
6. Complete independent security review before launch.

## Background references

- [Flipside company profile](https://www.linkedin.com/company/flipside-crypto/)
- [Public announcement concerning Flipside, SonarX, and edisyl](https://www.einnews.com/pr_news/913502316/flipside-sells-blockchain-data-business-to-sonarx-commits-fully-to-edisyl-enterprise-ai-platform)

AegisFlow is a new proposal supplied for the interview brief, not a project verified in those public materials. This README describes that proposed direction.
