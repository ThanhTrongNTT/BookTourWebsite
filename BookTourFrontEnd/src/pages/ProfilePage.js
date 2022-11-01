import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import BreadCrumbs from "@/breadcrumbs/BreadCrumbs";
import ButtonEdit from "@/button/ButtonEdit";
import ButtonSubmitDefault from "@/button/ButtonSubmitDefault";
import { WrapperFlex, WrapperGrid } from "@/common";
import FieldUpdateProfile from "@/field/FieldUpdateProfile";
import Heading from "@/heading/Heading";
import {
  IconCake,
  IconEmail,
  IconGender,
  IconHouse,
} from "@/icon/IconProfilePage";
import CardAvt from "~/modules/info/CardAvt";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const { handleSubmit, control, setValue, watch, setFocus } = useForm({
    mode: "onChange",
  });
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    document.title = "Profile";
    setValue("address", user.address ? user.address : "");
    setValue("email", user?.email);
    setValue("dateOfBirth", user?.dateOfBirth);
    setValue("gender", user?.gender?.genderType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditProfile = () => {
    setDisable(false);
    setFocus("address");
  };

  const handleCancelEdit = () => {
    const watchFields = watch(["address", "email", "gender"]);
    if (user?.address) {
      if (user.address !== watchFields[0]) alert("vinh");
    }
    if (user?.gender?.genderType) {
      if (user.gender.genderType !== watchFields[2]) alert("vinh");
    }
    setDisable(true);
  };

  const handleUpdateInfo = (values) => console.log(values);
  return (
    <div>
      <WrapperFlex className="my-10" items="center" spacing="3">
        <BreadCrumbs />
      </WrapperFlex>
      <WrapperFlex className="gap-[30px] lg:flex-row lg:gap-[33px]" col>
        <CardAvt />
        <div className="flex-1 px-5 lg:px-0">
          <Heading
            className="border-b-grayScale-c6 dark:border-b-grayScale-c6 mt-5 hidden border-b pb-8 lg:block"
            sx="xl-3"
          >
            My Profile
          </Heading>
          <div className="mt-20 font-DMSans">
            <WrapperFlex className="mb-12" justify="between">
              <p className="text-grayScale-c2 text-xl font-medium dark:text-white lg:text-2xl">
                Hi, I'm {user.fullName}
              </p>
              <ButtonEdit hasIconPen onClick={handleEditProfile}>
                Edit your profile
              </ButtonEdit>
            </WrapperFlex>
            <form onSubmit={handleSubmit(handleUpdateInfo)} className="mt-10">
              <WrapperGrid rows="3" spacing="8">
                <FieldUpdateProfile
                  name="address"
                  id="address"
                  placeholder="Enter your address"
                  control={control}
                  icon={<IconHouse />}
                  hasDisable={disable}
                >
                  Address
                </FieldUpdateProfile>
                <FieldUpdateProfile
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  control={control}
                  icon={<IconEmail />}
                  hasDisable
                >
                  Email
                </FieldUpdateProfile>
                <WrapperGrid cols="2" spacing="9">
                  <FieldUpdateProfile
                    name="dayOfBirth"
                    id="dayOfBirth"
                    placeholder="07/12/1997"
                    control={control}
                    icon={<IconCake />}
                    hasDisable={disable}
                  >
                    Date Of Birth
                  </FieldUpdateProfile>
                  <FieldUpdateProfile
                    name="gender"
                    id="gender"
                    placeholder="Enter your gender"
                    control={control}
                    icon={<IconGender />}
                    hasDisable={disable}
                  >
                    Gender
                  </FieldUpdateProfile>
                </WrapperGrid>
              </WrapperGrid>
              <div className="mt-8 inline-block w-full text-right">
                <div className="inline-block">
                  <WrapperFlex items="center">
                    <ButtonEdit
                      hasIconTrash
                      radius="8"
                      onClick={handleCancelEdit}
                      className="mr-4 !py-2 !px-4"
                      colorIcon="text-c4"
                      hasDisable={disable}
                    >
                      Cancel
                    </ButtonEdit>
                    <ButtonSubmitDefault
                      disable={disable}
                      onClick={() => setDisable(true)}
                      type="submit"
                      radius="8"
                      className="bg-blue-500 py-2 px-4 font-semibold text-white"
                    >
                      Update Profile
                    </ButtonSubmitDefault>
                  </WrapperFlex>
                </div>
              </div>
            </form>
          </div>
        </div>
      </WrapperFlex>
    </div>
  );
};

export default ProfilePage;
