import { useMemo, useState } from "react";
import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function ContactForm() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const [errors, setErrors] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const [feedback, setFeedback] = useState("");

  const isComplete = useMemo(
    () => nama.trim() !== "" && email.trim() !== "" && pesan.trim() !== "",
    [nama, email, pesan],
  );

  const validate = () => {
    const newErrors = {
      nama: "",
      email: "",
      pesan: "",
    };

    if (!nama.trim()) {
      newErrors.nama = "Nama wajib diisi.";
    } else if (nama.trim().length < 2) {
      newErrors.nama = "Nama minimal 2 karakter.";
    }

    if (!email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Format email tidak valid.";
    }

    if (!pesan.trim()) {
      newErrors.pesan = "Pesan wajib diisi.";
    } else if (pesan.trim().length < 10) {
      newErrors.pesan = "Pesan minimal 10 karakter.";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = () => {
    setFeedback("");

    if (!validate()) {
      setFeedback("Periksa kembali data yang kamu masukkan.");
      return;
    }

    Keyboard.dismiss();
    setFeedback(
      "Pesan berhasil divalidasi. Terima kasih telah menghubungi saya!",
    );

    setNama("");
    setEmail("");
    setPesan("");
    setErrors({ nama: "", email: "", pesan: "" });
  };

  const renderError = (message: string) =>
    message ? <Text style={styles.errorText}>{message}</Text> : null;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hubungi Saya</Text>
      <Text style={styles.subtitle}>
        Silakan isi formulir berikut untuk mengirimkan pesan.
      </Text>

      <Text style={styles.label}>Nama</Text>
      <TextInput
        style={[styles.input, errors.nama ? styles.inputError : null]}
        placeholder="Masukkan nama lengkap"
        value={nama}
        onChangeText={(value) => {
          setNama(value);
          setErrors((prev) => ({ ...prev, nama: "" }));
          setFeedback("");
        }}
      />
      {renderError(errors.nama)}

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={[styles.input, errors.email ? styles.inputError : null]}
        placeholder="nama@email.com"
        value={email}
        onChangeText={(value) => {
          setEmail(value);
          setErrors((prev) => ({ ...prev, email: "" }));
          setFeedback("");
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {renderError(errors.email)}

      <Text style={styles.label}>Pesan</Text>
      <TextInput
        style={[
          styles.input,
          styles.messageInput,
          errors.pesan ? styles.inputError : null,
        ]}
        placeholder="Tuliskan pesan minimal 10 karakter..."
        value={pesan}
        onChangeText={(value) => {
          setPesan(value.slice(0, 500));
          setErrors((prev) => ({ ...prev, pesan: "" }));
          setFeedback("");
        }}
        multiline
        textAlignVertical="top"
      />
      <Text style={styles.counter}>{pesan.length}/500 karakter</Text>
      {renderError(errors.pesan)}

      <Pressable
        style={[styles.button, !isComplete ? styles.buttonInactive : null]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Kirim Pesan</Text>
      </Pressable>

      {feedback ? (
        <Text
          style={[
            styles.feedback,
            feedback.startsWith("Pesan berhasil")
              ? styles.success
              : styles.failure,
          ]}
          accessibilityRole="alert"
        >
          {feedback}
        </Text>
      ) : null}

      <Text style={styles.note}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 6,
  },
  subtitle: {
    color: "#6B7280",
    marginBottom: 20,
    lineHeight: 21,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 7,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 9,
    padding: 12,
    fontSize: 14,
    color: "#111827",
    backgroundColor: "#FFFFFF",
  },
  inputError: {
    borderColor: "#DC2626",
  },
  messageInput: {
    minHeight: 120,
  },
  errorText: {
    color: "#DC2626",
    fontSize: 12,
    marginTop: 5,
  },
  counter: {
    color: "#6B7280",
    fontSize: 11,
    textAlign: "right",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 9,
    alignItems: "center",
    marginTop: 20,
  },
  buttonInactive: {
    backgroundColor: "#64748B",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
  feedback: {
    marginTop: 14,
    padding: 12,
    borderRadius: 8,
    fontSize: 13,
    lineHeight: 19,
  },
  success: {
    color: "#166534",
    backgroundColor: "#DCFCE7",
  },
  failure: {
    color: "#991B1B",
    backgroundColor: "#FEE2E2",
  },
  note: {
    fontSize: 11,
    color: "#6B7280",
    marginTop: 16,
    lineHeight: 17,
  },
});
