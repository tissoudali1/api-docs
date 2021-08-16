module.exports = {
  mySidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Account",
      items: [
        "account/about",
        "account/credentials",
        "account/structure",
        "account/setup",
        "account/applications",
        "account/subscriptions",
      ],
    },
    {
      type: "category",
      label: "Numbers",
      items: [
        "numbers/about",
        {
          type: "category",
          label: "Webhooks",
          items: [
            "numbers/webhooks",
            "numbers/orderWebhook",
            "numbers/eventWebhook",
            "numbers/portoutValidationWebhook",
          ],
        },
        {
          type: "category",
          label: "Guides and Tutorials",
          items: [
            "numbers/searchingNumbers",
            "numbers/orderingNumbers",
            "numbers/portingNumbers",
            "numbers/hostingNumbers",
            "numbers/manageNumberFeatures",
            "numbers/searchNumbers",
            "numbers/disconnectNumbers",
            "numbers/lookupNumbers",
            "numbers/downloadingReports",
          ],
        },
        "numbers/errors",
      ],
    },
    {
      type: "category",
      label: "Voice",
      items: [
        "voice/about",
        {
          type: "category",
          label: "Webhooks",
          items: [
            "voice/webhooks/about",
            "voice/webhooks/answer",
            "voice/webhooks/bridgeComplete",
            "voice/webhooks/bridgeTargetComplete",
            "voice/webhooks/conferenceCreated",
            "voice/webhooks/conferenceRedirect",
            "voice/webhooks/conferenceMemberJoin",
            "voice/webhooks/conferenceMemberExit",
            "voice/webhooks/conferenceCompleted",
            "voice/webhooks/conferenceRecordingAvailable",
            "voice/webhooks/disconnect",
            "voice/webhooks/dtmf",
            "voice/webhooks/gather",
            "voice/webhooks/initiate",
            "voice/webhooks/recordComplete",
            "voice/webhooks/recordingAvailable",
            "voice/webhooks/redirect",
            "voice/webhooks/transcriptionAvailable",
            "voice/webhooks/transferAnswer",
            "voice/webhooks/transferComplete",
            "voice/webhooks/transferDisconnect",
          ],
        },
        {
          type: "category",
          label: "BXML",
          items: [
            "voice/bxml/about",
            "voice/bxml/bridge",
            "voice/bxml/conference",
            "voice/bxml/forward",
            "voice/bxml/gather",
            "voice/bxml/hangup",
            "voice/bxml/pause",
            "voice/bxml/pauseRecording",
            "voice/bxml/playAudio",
            "voice/bxml/record",
            "voice/bxml/redirect",
            "voice/bxml/resumeRecording",
            "voice/bxml/ring",
            "voice/bxml/sendDtmf",
            "voice/bxml/speakSentence",
            "voice/bxml/startGather",
            "voice/bxml/startRecording",
            "voice/bxml/stopGather",
            "voice/bxml/stopRecording",
            "voice/bxml/tag",
            "voice/bxml/transfer",
          ],
        },
        {
          type: "category",
          label: "Guides and Tutorials",
          items: ["voice/recordingGuide", "voice/cnamPerDipGuide"],
        },
        "voice/rateLimits",
        "voice/errors",
      ],
    },
    {
      type: "category",
      label: "Messaging",
      items: [
        "messaging/about",
        "messaging/webhooks",
        {
          type: "category",
          label: "Guides and Tutorials",
          items: [
            "messaging/createMessage",
            "messaging/getMessage",
            "messaging/mediaManagement",
          ],
        },
        "messaging/rateLimits",
        "messaging/errors",
      ],
    },
    {
      type: "category",
      label: "WebRTC",
      items: [
        "webrtc/about",
        {
          type: "category",
          label: "Guides and Tutorials",
          items: [
            "webrtc/overview",
            "webrtc/quickstart",
            "webrtc/resources",
            "webrtc/webhooks",
            "webrtc/voice-iw",
            "webrtc/callflow",
          ],
        },
        "webrtc/errors",
      ],
    },
    {
      type: "category",
      label: "Multi-Factor Authentication",
      items: ["mfa/about", "mfa/errors", "mfa/rateLimits"],
    },
    {
      type: "category",
      label: "Emergency Services",
      items: [
        "emergency/about",
        {
          type: "category",
          label: "Bandwidth Dashboard",
          items: [
            "emergency/dashboard/about",
            "emergency/dashboard/dlr",
            "emergency/dashboard/notifications",
          ],
        },
        {
          type: "category",
          label: "911 Access Dashboard",
          items: [
            "emergency/dash/about",
            "emergency/dash/usage",
            "emergency/dash/soap",
            "emergency/dash/errors",
          ],
        },
        "emergency/emergencyCallingApi",
      ],
    },
  ],
};
