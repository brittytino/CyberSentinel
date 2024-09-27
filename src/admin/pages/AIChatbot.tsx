import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ChatIcon from "@material-ui/icons/Chat";
import HistoryIcon from "@material-ui/icons/History";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import SvgContainer from "../../core/components/SvgContainer";
import AdminAppBar from "../components/AdminAppBar";
import AdminToolbar from "../components/AdminToolbar";

const AIChatbot = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {/* App Bar with Title */}
      <AdminAppBar>
        <AdminToolbar title={t("chatbot.title")} />
      </AdminAppBar>

      {/* Main Container for Logo/SVG */}
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <SvgContainer>
          {/* You can replace this with a chatbot SVG or icon */}
          {/* <ChatBotSvg /> */}
        </SvgContainer>
      </Container>

      {/* Grid Layout for Chatbot Menu */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Chat Interface */}
        <Grid item xs={12} sm={6} lg={3}>
          <Card>
            <CardActionArea
              component={RouterLink}
              to={`/${process.env.PUBLIC_URL}/admin/chat`}
            >
              <CardHeader
                avatar={
                  <Avatar aria-label="Chat icon">
                    <ChatIcon />
                  </Avatar>
                }
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {t("chatbot.menu.chat")}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Conversation History */}
        <Grid item xs={12} sm={6} lg={3}>
          <Card>
            <CardActionArea
              component={RouterLink}
              to={`/${process.env.PUBLIC_URL}/admin/history`}
            >
              <CardHeader
                avatar={
                  <Avatar aria-label="History icon">
                    <HistoryIcon />
                  </Avatar>
                }
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {t("chatbot.menu.history")}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Chatbot Settings */}
        <Grid item xs={12} sm={6} lg={3}>
          <Card>
            <CardActionArea
              component={RouterLink}
              to={`/${process.env.PUBLIC_URL}/admin/settings`}
            >
              <CardHeader
                avatar={
                  <Avatar aria-label="Settings icon">
                    <SettingsIcon />
                  </Avatar>
                }
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {t("chatbot.menu.settings")}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Info Section */}
        <Grid item xs={12} sm={6} lg={3}>
          <Card>
            <CardActionArea
              component={RouterLink}
              to={`/${process.env.PUBLIC_URL}/admin/info`}
            >
              <CardHeader
                avatar={
                  <Avatar aria-label="Info icon">
                    <InfoIcon />
                  </Avatar>
                }
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {t("chatbot.menu.info")}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AIChatbot;
