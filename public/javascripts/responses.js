function getBotResponse(input) {
    // Simple responses
    if (input == "hello" || "Hi") {
        return "Hello there!";
    }
    if (input == "goodbye") {
        return "Talk to you later!";
    }
    if (input == "thank you" || "Thank you") {
        return "you're welcome";
    }
    if (input == "how to donate blood" || "I want to donate blood") {
        return "you have to register and then contact the nearby bloodbanks";
    }
    if (input == "what are the requirements to donate blood?" || "requirements to donate blood") {
        return "You must be at least 16 years old, weigh at least 110 pounds, and be in good health.";
    }
    if (input == "how often can I donate blood?" || "when to donate" || "when to donate blood") {
        return "You can donate blood every 56 days.";
    }
    if (input == "what should I do before donating blood?" || "what to do before donating" || "what to do before donating blood") {
        return "Drink plenty of water and eat a healthy meal before donating blood.";
    }
    if (input == "is it safe to donate blood?" || "is it safe to donate blood") {
        return "Yes, donating blood is safe as long as you meet the eligibility requirements and follow the donation process.";
    }
    if (input == "can I donate blood if I have a medical condition?" || "what if I have some disease" || "can I donate blood if I have a medical condition") {
        return "It depends on the medical condition. Please consult your doctor or the blood donation center for more information.";
    }
    else {
        return "Try asking something else!";
    }
}
