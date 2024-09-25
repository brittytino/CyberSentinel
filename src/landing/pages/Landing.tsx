import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Stack from "@material-ui/core/Stack";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../auth/contexts/AuthProvider";
import LandingLayout from "../components/LandingLayout";
import FAQSection from "../components/FAQ";
import PricingSection from "../components/PricingSection";  // Import the new PricingSection component

const Landing = () => {
  const { userInfo } = useAuth();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <LandingLayout>
      <main>
        <Box
          sx={{
            py: 6,
          }}
        >
          <Container maxWidth="sm">
          <br></br><br></br>
            <Typography
              variant="h1"
              align="center"
              color="text.primary"
              marginBottom={4}
            >
              {t("landing.title")}
            </Typography>
            <Stack
              sx={{ pt: 3 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                component={RouterLink}
                to={`/${process.env.PUBLIC_URL}/register`}
                rel="noopener noreferrer"
                variant="outlined"
              >
                {t("landing.cta.secondary")}
              </Button>
              {userInfo ? (
                <Button
                  component={RouterLink}
                  to={`/${process.env.PUBLIC_URL}/login`}
                  variant="contained"
                >
                  {t("landing.cta.mainAuth", { name: userInfo.firstName })}
                </Button>
              ) : (
                <Button
                  component={RouterLink}
                  to={`/${process.env.PUBLIC_URL}/login`}
                  variant="contained"
                >
                  {t("landing.cta.main")}
                </Button>
              )}
            </Stack>
          </Container>
        </Box>
        <br></br><br></br><br></br>
        {/* FAQ Section */}
        <FAQSection />

        {/* Pricing Section */}
        <PricingSection />  {/* Render PricingSection */}

      </main>
    </LandingLayout>
  );
};

export default Landing;
