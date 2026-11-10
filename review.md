# Code Review 
# Code Review - Refund Feature (Noa's Branch)

## Findings
- **Bug Identified**: The refund logic incorrectly includes and returns the service fee to the customer. Service fees should remain non-refundable, and only the base ticket price should be refunded.